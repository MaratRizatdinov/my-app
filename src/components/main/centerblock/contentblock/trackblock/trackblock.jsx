import React, { useEffect } from 'react'
import * as S from './trackblock.style'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../../../../skeleton/skeleton'
import { setCurrentTrack } from '../../../../../store/actions/creators/setCurrentTrack'
import { changeModeName } from '../../../../../store/actions/creators/changeModeName'
import { setModifiedPlaylist } from '../../../../../store/actions/creators/modifiedPlaylist'
import { useLike } from '../../../../../hooks/useLike'
import { useGetSelectionQuery } from '../../../../../store/services/selection'
import { useFavorites } from '../../../../../hooks/useFavorites'

function Trackblock() {
    const dispatch = useDispatch()
    const location = useLocation()

    const playlist = useSelector((s) => s.state.playlist)
    const isPlaying = useSelector((s) => s.state.isPlaying)
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const loadingMode = useSelector((s) => s.state.loadingMode)
    const filterAuthors = useSelector((s) => s.state.filterAuthors)
    const filterGenre = useSelector((s) => s.state.filterGenre)
    const filterByYear = useSelector((s) => s.state.filterYear)
    const filterBySubstring = useSelector((s) => s.state.filterSubstring)
    const favoritesPlaylist = useFavorites()
    const { data: selectionPlaylist } = useGetSelectionQuery()
    const [handleClickToLike, handleClickToDizLike] = useLike()

    // Блок отвечает за сортировку и фильтрацию

    const filteredByAuthor = playlist.filter((elem) => {
        if (filterAuthors.length == 0) return elem
        return filterAuthors.includes(elem.author)
    })

    const filteredByGenreAndAuthor = filteredByAuthor.filter((elem) => {
        if (filterGenre.length == 0) return elem
        return filterGenre.includes(elem.genre)
    })

    const sortedAndFilteredPlaylist =
        filterByYear == 'По умолчанию'
            ? filteredByGenreAndAuthor
            : filteredByGenreAndAuthor.sort(function (a, b) {
                  if (filterByYear == 'Сначала новые') [a, b] = [b, a]
                  if (a['release_date'] > b['release_date']) {
                      return 1
                  }
                  if (a['release_date'] < b['release_date']) {
                      return -1
                  }
                  return 0
              })

    const finallyFilteredPlaylist =
        filterBySubstring == ''
            ? sortedAndFilteredPlaylist
            : sortedAndFilteredPlaylist.filter((elem) =>
                  elem['name']
                      .toLowerCase()
                      .includes(filterBySubstring.toLowerCase())
              )

    // Проверяем применен ли фильтр.

    const compareArrays = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b)
    }

    const isFiltered = !compareArrays(playlist, finallyFilteredPlaylist)

    if (isFiltered) {
        dispatch(setModifiedPlaylist(finallyFilteredPlaylist))
    } else {
        dispatch(setModifiedPlaylist(playlist))
    }

    // Блок определяет текущую страницу

    const pageName =
        location.pathname == '/'
            ? !isFiltered
                ? 'Main'
                : 'Filtered'
            : location.pathname == '/favorites'
            ? 'Favorites'
            : location.pathname == '/categories/1'
            ? 'Classic'
            : location.pathname == '/categories/2'
            ? 'Electro'
            : 'Rok'
            
    // Логика выбора показывемого списка

    const tracklist =
        pageName == 'Main'
            ? playlist || []
            : pageName == 'Filtered'
            ? finallyFilteredPlaylist || []
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
                        <S.TrackAuthorLink>{elem.author}</S.TrackAuthorLink>
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
