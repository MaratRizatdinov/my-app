import { React, useRef, useState, useEffect} from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ControlPanel from './ControlPanel/controlpanel';
import TrackPlayContain from './TrackPlayContain/trackplaycontain';
import TrackPlayLikeDiz from './TrackPlayLikeDiz/trackplaylikediz';
import Volumeblock from './Volumeblock/volumeblock';
import * as S from './bar.style'

function Bar({loading , trackSelect}){
  
  const audioRef = useRef(null);

  // Блок отвечает за логику Loop

  const [isLoop, setIsLoop] = useState(false);
      
  const toggleLoop =()=>{
    setIsLoop(!isLoop);        
  }

//  Блок отвечает за логику кнопки Play/Pause

  const [isPlaying, setIsPlaying] = useState(true);      

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);        
  }

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);        
  };

  const togglePlay = isPlaying ? handleStop : handleStart;  

  // Блок отвечает за логику Bar

  const [currentTime, setCurrentTime]=useState(0);
  const [ duration, setDuration] =useState(0);
  const [volume,setVolume]=useState(1);
  
  useEffect(()=>{

    audioRef.current.volume=0.2;
    setVolume(audioRef.current.volume);
    const timeUpdate =(event)=>{
      if(audioRef.current?.currentTime && audioRef.current.duration){
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      } else{
        setCurrentTime(0);
        setDuration(0);

      }
    }

    audioRef.current.addEventListener('timeupdate', timeUpdate);

    return ()=>{
      audioRef.current?.removeEventListener('timeupdate', timeUpdate);
    }
  },[])

  // Блок отвечает за запуск трека при смене трека

  useEffect(()=>{
    audioRef.current.load();    
  },[trackSelect])

  //Блок визуализирует таймер

  const timerShow=(num)=>{
    const timer = Math.floor(num);
    const timerMin=Math.floor(timer/60);
    const timerSec=Math.floor(timer%60);
    const timerZero= Math.floor(timer%60)<10 ? '0' : '';
    return '0' + timerMin+ ':' + timerZero + timerSec;    
  }


    return <S.Bar>
              <audio style={{display:'none'}} controls ref={audioRef} loop={isLoop} autoPlay> 
                <source src={trackSelect.track_file} type="audio/mpeg" />
              </audio>
              <S.BarContent>
                <S.TimerBlock>
                  <S.Timer>
                    {timerShow(currentTime)} / {timerShow(duration)} 
                  </S.Timer>
                </S.TimerBlock>
                <S.BarPlayerProgress>                  
                  <ProgressBar
                    audioRef={audioRef}
                    currentTime={currentTime}
                    duration ={duration}
                  />
                </S.BarPlayerProgress>
                <S.BarPlayerBlock>
                  <S.BarPlayer>
                    <ControlPanel 
                      isLoop={isLoop}
                      toggleLoop={toggleLoop}
                      isPlaying={isPlaying}                      
                      togglePlay ={togglePlay}
                    />
                    <S.PlayerTrackPlay>
                      <TrackPlayContain loading={loading} trackSelect={trackSelect}/>
                      <TrackPlayLikeDiz />                              
                    </S.PlayerTrackPlay>
                  </S.BarPlayer>
                  <Volumeblock 
                    audioRef={audioRef}
                    volume = {volume}
                    setVolume = {setVolume}
                  />              
                </S.BarPlayerBlock>
              </S.BarContent>
            </S.Bar>;
}

export default Bar;

