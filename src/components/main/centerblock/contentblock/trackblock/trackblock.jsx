import React from 'react';
import "./trackblock.css";
import Skeleton from '../../../../skeleton/skeleton';
import { workArray } from '../../../../../workarray';


const trackInfo=workArray();


function Trackblock({loading}){
    
    

    const listItems = trackInfo.map((elem) =>
  <div className="playlist__item" key={elem.id}>
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">{loading ? <Skeleton width='356px' height='19px' /> : (<a className="track__title-link" href="http://"
              >{elem['track title']} <span className="track__title-span">{elem['track comment']}</span
            ></a>)}            
          </div>
        </div>
        <div className="track__author">
          {loading ? <Skeleton width='271px' height='19px' /> : (<a className="track__author-link" href="http://">{elem['track author']}</a>)}
          
          
        </div>
        <div className="track__album">
          {loading ? <Skeleton width='205px' height='19px' /> : (<a className="track__album-link" href="http://"
            >{elem['track album']}</a
          >)}
          
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          { loading ? <span className="track__time-text">0:00</span> : <span className="track__time-text">{elem['track time']}</span>}
          
        </div>
      </div>
    </div>
);
    
    return <div className="content__playlist playlist">{listItems}</div>;
}



export default Trackblock;                
                
                
                
                