import React from 'react';
import Skeleton from '../../skeleton/skeleton';
import * as S from './trackplaycontain.style';
import {getTrackByID} from '..//..//..//api'

function TrackPlayContain({loading, trackSelect}){
    console.log(getTrackByID);
    console.log(trackSelect);
    return  <S.TrackPlayContain>
              <S.TrackPlayImage>
                <S.TrackPlaySvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackPlaySvg>
              </S.TrackPlayImage>
              <S.TrackPlayAuthor>
                 {loading ? <Skeleton width='59px' height='15px' /> :
                  <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>}                
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum>
                 { loading ? <Skeleton width='59px' height='15px' /> :
                 <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>}                
              </S.TrackPlayAlbum>
            </S.TrackPlayContain>
          }
export default TrackPlayContain;
