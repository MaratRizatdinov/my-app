import { React, useRef, useState} from 'react';
import ControlPanel from './ControlPanel/controlpanel';
import TrackPlayContain from './TrackPlayContain/trackplaycontain';
import TrackPlayLikeDiz from './TrackPlayLikeDiz/trackplaylikediz';
import Volumeblock from './Volumeblock/volumeblock';

import * as S from './bar.style'

function Bar({loading , trackSelect}){
  
  const audioRef = useRef(null);

  const [isLoop, setIsLoop] = useState(false);
      
  const toggleLoop =()=>{
    setIsLoop(!isLoop);        
  }

  





  
    return <S.Bar>
              <audio controls ref={audioRef} loop={isLoop} autoPlay> 
                <source src={trackSelect.track_file} type="audio/mpeg" />
              </audio>
              <S.BarContent>
                <S.BarPlayerProgress></S.BarPlayerProgress>
                <S.BarPlayerBlock>
                  <S.BarPlayer>
                    <ControlPanel 
                      trackSelect={trackSelect}
                      isLoop={isLoop}
                      toggleLoop={toggleLoop}
                      audioRef={audioRef}
                    />
                    <S.PlayerTrackPlay>
                      <TrackPlayContain loading={loading} trackSelect={trackSelect}/>
                      <TrackPlayLikeDiz />                              
                    </S.PlayerTrackPlay>
                  </S.BarPlayer>
                  <Volumeblock />              
                </S.BarPlayerBlock>
              </S.BarContent>
            </S.Bar>;
            }
        export default Bar;