import React from 'react';
import './controlpanel.css';

function ControlPanel(){
    return <div className="player__controls">

    <ControlButton class="player__btn-prev" svg="player__btn-play-svg" alt="prev" img = "img/icon/sprite.svg#icon-prev" />
    
    <ControlButton class="player__btn-play _btn" svg="player__btn-play-svg" alt="play" img = "img/icon/sprite.svg#icon-play" />
    
    <ControlButton class="player__btn-next" svg="player__btn-next-svg" alt="next" img = "img/icon/sprite.svg#icon-next" />
    
    <ControlButton class="player__btn-repeat _btn-icon" svg="player__btn-repeat-svg" alt="repeat" img = "img/icon/sprite.svg#icon-repeat" />
    
    <ControlButton class="player__btn-shuffle _btn-icon" svg="player__btn-shuffle-svg" alt="shuffle" img = "img/icon/sprite.svg#icon-shuffle" />
    
    
  </div>;
}
export default ControlPanel;

function ControlButton(props){
    return <div className={props.class}>
    <svg className={props.svg} alt={props.alt}>
      <use xlinkHref={props.img}></use>
    </svg>
  </div>;
}
          
          