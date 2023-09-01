import { React } from 'react';
import * as S from './controlpanel.style';

function ControlPanel({ toggleLoop, isLoop, isPlaying, togglePlay}){      

      const alertMessage=()=>{
        alert('не реализован');
      }


    return  <S.PlayerControls>
                
                <ControlButton component = "player__btn-prev" 
                              class=" _btn" 
                              svg="player__btn-prev-svg" 
                              alt="prev"
                              img = "img/icon/sprite.svg#icon-prev" 
                              click={alertMessage}
                              />              
                <ControlButton component = "player__btn-play"
                              class=" _btn"
                              svg="player__btn-play-svg"
                              alt="play"
                              img = {!isPlaying ? "img/icon/sprite.svg#icon-play" : "img/icon/sprite.svg#icon-pause"} 
                              click = {togglePlay}/>              
                <ControlButton component = "player__btn-next"
                              class="_btn"
                              svg="player__btn-next-svg"
                              alt="next"
                              img = "img/icon/sprite.svg#icon-next"
                              click={alertMessage} />              
                <ControlButton component = "player__btn-repeat" 
                              class="_btn-icon"
                              svg="player__btn-repeat-svg"
                              alt="repeat"
                              img = "img/icon/sprite.svg#icon-repeat"
                              click ={toggleLoop}
                              button_color = {isLoop ? 'white' : 'grey'}/>  
                              
                <ControlButton component = "player__btn-shuffle"
                              class="_btn-icon"
                              svg="player__btn-shuffle-svg"
                              alt="shuffle"
                              img = "img/icon/sprite.svg#icon-shuffle"
                              click={alertMessage} />                
            </S.PlayerControls>;
}
export default ControlPanel;

function ControlButton({...props}){

    const buttonCollection={
      "player__btn-prev":S.PlayerButtonPrev,
      "player__btn-play":S.PlayerButtonPlay,
      "player__btn-next":S.PlayerButtonNext,
      "player__btn-repeat":S.PlayerButtonRepeat,
      "player__btn-shuffle":S.PlayerButtonShuffle,
    }
    
    const Func=buttonCollection[props.component];  

    return(<Func className={props.class} onClick={props.click}>          
            <ControlButtonSVG props={props}></ControlButtonSVG>
          </Func>);    
}

function ControlButtonSVG({props}){

    const buttonCollectionSvg={
      "player__btn-prev-svg":S.PlayerButtonPrevSvg,
      "player__btn-play-svg":S.PlayerButtonPlaySvg,
      "player__btn-next-svg":S.PlayerButtonNextSvg,
      "player__btn-repeat-svg":S.PlayerButtonRepeatSvg,
      "player__btn-shuffle-svg":S.PlayerButtonShuffleSvg,
    }
    
    const Func=buttonCollectionSvg[props.svg];
    
    return <Func alt={props.alt} button_color={props.button_color} >
              <use xlinkHref={props.img}></use>
          </Func>
}



          