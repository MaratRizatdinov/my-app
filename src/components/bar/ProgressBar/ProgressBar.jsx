import  React from 'react';
import * as S from './progressbar.style';
import { useDispatch, useSelector } from 'react-redux';
import { playTrack } from '../../../store/actions/creators/playTrack';

function ProgressBar({audioRef, currentTime, duration}) {
  
  const dispatch = useDispatch();
  const playingStatus = useSelector((s) => s.state.isPlaying)

  const handleTimeChange =(newTime)=>{
    audioRef.current.currentTime=newTime;
    audioRef.current.play();
    if(!playingStatus) dispatch(playTrack());    
  }

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => {        
        handleTimeChange(event.target.value);         
        }
      }
      $color="#b672ff"
    />
  );            
}
 
export default ProgressBar;