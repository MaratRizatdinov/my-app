import React from 'react'
import Skeleton from '../../skeleton/skeleton'
import * as S from './trackplaycontain.style'
import { useSelector } from 'react-redux'

function TrackPlayContain() {
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const loadingMode = useSelector((s) => s.state.loadingMode)

    return (
        <S.TrackPlayContain>
            <S.TrackPlayImage>
                <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackPlaySvg>
            </S.TrackPlayImage>
            <S.TrackPlayAuthor>
                {loadingMode ? (
                    <Skeleton width="59px" height="15px" />
                ) : (
                    <S.TrackPlayAuthorLink href="http://">
                        {currentTrack.name}
                    </S.TrackPlayAuthorLink>
                )}
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
                {loadingMode ? (
                    <Skeleton width="59px" height="15px" />
                ) : (
                    <S.TrackPlayAlbumLink href="http://">
                        {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                )}
            </S.TrackPlayAlbum>
        </S.TrackPlayContain>
    )
}
export default TrackPlayContain
