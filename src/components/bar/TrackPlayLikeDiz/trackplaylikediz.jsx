import React from 'react'
import * as S from './trackplaylikediz.style'
import { useSelector } from 'react-redux'
import {
    useGetAllFavoritesQuery,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from '../../../store/services/favorite'

function TrackPlayLikeDiz() {
    const token = useSelector((s) => s.state.accessToken)
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const { data: favoritesPlaylist } = useGetAllFavoritesQuery(token)
    const [addFavorite] = useAddFavoriteTrackMutation()
    const [deleteFavorite] = useDeleteFavoriteTrackMutation()

    const favoriteArrayByID = favoritesPlaylist.map((elem) => elem.id)
    const likedStatus = favoriteArrayByID.includes(currentTrack.id)

    function handleClick() {
        likedStatus
            ? deleteFavorite({ id: currentTrack.id, accessToken: token })
            : addFavorite({ id: currentTrack.id, accessToken: token })
    }

    return (
        <S.TrackPlayLikeDis>
            <S.TrackPlayLike className="_btn-icon" onClick={handleClick}>
                <S.TrackPlayLikeSvg alt="like">
                    {likedStatus ? (
                        <use xlinkHref="../img/icon/sprite.svg#icon-likeclicked"></use>
                    ) : (
                        <use xlinkHref="../img/icon/sprite.svg#icon-like"></use>
                    )}
                </S.TrackPlayLikeSvg>
            </S.TrackPlayLike>
        </S.TrackPlayLikeDis>
    )
}

export default TrackPlayLikeDiz
