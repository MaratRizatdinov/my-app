import React from 'react';
import Skeleton from '../../skeleton/skeleton';
import * as S from './trackplaycontain.style';


function TrackPlayContain({loading, trackSelect}){
    
    


    return  <S.TrackPlayContain>
              <S.TrackPlayImage>
                <S.TrackPlaySvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackPlaySvg>
              </S.TrackPlayImage>
              <S.TrackPlayAuthor>
                 {loading ? <Skeleton width='59px' height='15px' /> :
                  <S.TrackPlayAuthorLink href="http://">{trackSelect.name}</S.TrackPlayAuthorLink>}                
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum>
                 { loading ? <Skeleton width='59px' height='15px' /> :
                 <S.TrackPlayAlbumLink href="http://">{trackSelect.author}</S.TrackPlayAlbumLink>}                
              </S.TrackPlayAlbum>
            </S.TrackPlayContain>
          }
export default TrackPlayContain;
