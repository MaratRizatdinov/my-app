import React from 'react';
import './trackplaycontain.css';
import Skeleton from '../../skeleton/skeleton';

function TrackPlayContain({loading}){
    return <div className="track-play__contain">
    <div className="track-play__image">
      <svg className="track-play__svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
    <div className="track-play__author">
      { loading ? <Skeleton width='59px' height='15px' />:<a className="track-play__author-link" href="http://"
        >Ты та...</a
      >}
      
    </div>
    <div className="track-play__album">
      { loading ? <Skeleton width='59px' height='15px' /> : <a className="track-play__album-link" href="http://">Баста</a>}
      
    </div>
  </div>;
}

export default TrackPlayContain;
