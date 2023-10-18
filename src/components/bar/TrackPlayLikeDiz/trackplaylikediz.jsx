import React from 'react'
import * as S from './trackplaylikediz.style'
import { useSelector } from 'react-redux'
import { useLike } from '../../../hooks/useLike'
import { useFavorites } from '../../../hooks/useFavorites'

function TrackPlayLikeDiz() {
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const favoritesPlaylist = useFavorites()
    const [handleClickToLike, handleClickToDizLike] = useLike()
    const favoriteArrayByID = favoritesPlaylist?.map((elem) => elem.id)
    const likedStatus = favoriteArrayByID?.includes(currentTrack.id)

    function handleClick() {
        likedStatus
            ? handleClickToDizLike(currentTrack)
            : handleClickToLike(currentTrack)
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
