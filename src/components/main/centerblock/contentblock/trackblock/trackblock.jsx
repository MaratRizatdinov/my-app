import React from 'react';
import * as S from './trackblock.style';
import Skeleton from '../../../../skeleton/skeleton';
import { workArray } from '../../../../../workarray'; 


const trackInfo=workArray();

function Trackblock({loading}){
    


  const listItems = trackInfo.map((elem) =>
  <S.PlayListItem key={elem.id}>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div>{loading ? <Skeleton width='356px' height='19px' /> : (<S.TrackTitleLink href="http://"
              >{elem['track title']} <S.TrackTitleSpan>{elem['track comment']}</S.TrackTitleSpan
            ></S.TrackTitleLink>)}            
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loading ? <Skeleton width='271px' height='19px' /> : (<S.TrackAuthorLink href="http://">{elem['track author']}</S.TrackAuthorLink>)}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {loading ? <Skeleton width='205px' height='19px' /> : (<S.TrackAlbumLink href="http://"
            >{elem['track album']}</S.TrackAlbumLink>)}          
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          { loading ? <S.TrackTimeText>0:00</S.TrackTimeText> : <S.TrackTimeText>{elem['track time']}</S.TrackTimeText>}
          
        </div>
      </S.PlayListTrack>
    </S.PlayListItem>
);
    
    return <S.ContentPlaylist>
              {listItems}
            </S.ContentPlaylist>;
}



export default Trackblock;                
                
                
                
                