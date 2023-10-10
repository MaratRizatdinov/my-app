import React from 'react'
import * as S from './trackblock.style'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../../../../skeleton/skeleton'
import { setCurrentTrack } from '../../../../../store/actions/creators/setCurrentTrack'
import { exitFromTracksPage } from '../../../../../store/actions/creators/exitFromTracksPage'
import { changeModeName } from '../../../../../store/actions/creators/changeModeName'

import {
    useGetAllFavoritesQuery,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from '../../../../../store/services/favorite'

import { useGetSelectionQuery } from '../../../../../store/services/selection'

function Trackblock() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const token = useSelector((s) => s.state.accessToken)
    const playlist = useSelector((s) => s.state.playlist)
    const isPlaying = useSelector((s) => s.state.isPlaying)
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const loadingMode = useSelector((s) => s.state.loadingMode)
    const filterAuthors = useSelector((s) => s.state.filterAuthors)

    const { data: favoritesPlaylist } = useGetAllFavoritesQuery(token)
    const { data: selectionPlaylist } = useGetSelectionQuery()
    const [addFavorite] = useAddFavoriteTrackMutation()
    const [deleteFavorite] = useDeleteFavoriteTrackMutation()

    const pageName =
        location.pathname == '/'
            ? 'Main'
            : location.pathname == '/favorites'
            ? 'Favorites'
            : location.pathname == '/categories/1'
            ? 'Classic'
            : location.pathname == '/categories/2'
            ? 'Electro'
            : 'Rok'

    const filteredPlaylist = playlist.filter((elem) => {
        if (filterAuthors.length == 0) return elem
        return filterAuthors.includes(elem.author)
    })

    const tracklist =
        pageName == 'Main'
            ? filteredPlaylist
            : pageName == 'Favorites'
            ? favoritesPlaylist || []
            : pageName == 'Classic'
            ? selectionPlaylist[0].items || []
            : pageName == 'Electro'
            ? selectionPlaylist[1].items || []
            : pageName == 'Rok'
            ? selectionPlaylist[2].items || []
            : []

    // Логика обработки клика на трек в плейлисте

    const handleClickToTrack = (elem) => {
        dispatch(setCurrentTrack(elem))
        dispatch(changeModeName(pageName))
    }

    // Логика клика на сердечко(лайк/дизлайк)

    const handleClickToLike = (elem) => {
        addFavorite({ id: elem.id, accessToken: token })
            .unwrap()
            .catch((error) => {
                dispatch(exitFromTracksPage())
                navigate('/login')
            })
    }
    const handleClickToDizLike = (elem) => {
        deleteFavorite({ id: elem.id, accessToken: token })
            .unwrap()
            .catch((error) => {
                dispatch(exitFromTracksPage())
                navigate('/login')
            })
    }

    // Разметка

    const listItems = tracklist.map((elem) => (
        <S.PlayListItem key={elem.id}>
            <S.PlayListTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage id={elem.id}>
                        {currentTrack?.id !== elem.id ? (
                            <S.TrackTitleSvg alt="music">
                                <use xlinkHref="../img/icon/sprite.svg#icon-note"></use>
                            </S.TrackTitleSvg>
                        ) : (
                            <S.TrackTitleSvgActive
                                alt="music"
                                $isPlaying={isPlaying}
                            >
                                <use xlinkHref="../img/icon/sprite.svg#icon-colorcircle"></use>
                            </S.TrackTitleSvgActive>
                        )}
                    </S.TrackTitleImage>
                    <div>
                        {loadingMode ? (
                            <Skeleton width="356px" height="19px" />
                        ) : (
                            <S.TrackTitleLink
                                onClick={() => handleClickToTrack(elem)}
                            >
                                {elem.name}
                            </S.TrackTitleLink>
                        )}
                    </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                    {loadingMode ? (
                        <Skeleton width="271px" height="19px" />
                    ) : (
                        <S.TrackAuthorLink href="http://">
                            {elem.author}
                        </S.TrackAuthorLink>
                    )}
                </S.TrackAuthor>
                <S.TrackAlbum>
                    {loadingMode ? (
                        <Skeleton width="205px" height="19px" />
                    ) : (
                        <S.TrackAlbumLink href="http://">
                            {elem.album}
                        </S.TrackAlbumLink>
                    )}
                </S.TrackAlbum>
                <div>
                    <S.TrackLikeSvg
                        alt="like"
                        onClick={() => {
                            likeStatus(favoritesPlaylist, elem) === 'like'
                                ? handleClickToDizLike(elem)
                                : handleClickToLike(elem)
                        }}
                    >
                        {likeStatus(favoritesPlaylist, elem) === 'like' ? (
                            <use xlinkHref="../img/icon/sprite.svg#icon-likeclicked"></use>
                        ) : (
                            <use xlinkHref="../img/icon/sprite.svg#icon-like"></use>
                        )}
                    </S.TrackLikeSvg>
                    {loadingMode ? (
                        <S.TrackTimeText>0:00</S.TrackTimeText>
                    ) : (
                        <S.TrackTimeText>
                            {durationInMinutes(elem['duration_in_seconds'])}
                        </S.TrackTimeText>
                    )}
                </div>
            </S.PlayListTrack>
        </S.PlayListItem>
    ))
    const emptyList = (
        <S.FavoritesEmpty>В этом плейлисте нет треков</S.FavoritesEmpty>
    )

    return (
        <S.ContentPlaylist>
            {tracklist.length !== 0 ? listItems : emptyList}
        </S.ContentPlaylist>
    )
}

export default Trackblock

// Вспомогательные функции

function durationInMinutes(seconds) {
    let min = Math.floor(+seconds / 60)
    let sec = +seconds % 60
    let zero = sec < 10 ? '0' : ''
    let str = String(min) + ':' + zero + String(sec)
    return str
}

function likeStatus(arr, item) {
    if (arr == undefined) return 'nolike'
    const newArr = arr.map((elem) => elem.id)
    return newArr.includes(item.id) ? 'like' : 'nolike'
}
