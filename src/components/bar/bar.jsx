import React from 'react';
import ControlPanel from './ControlPanel/controlpanel';
import TrackPlayContain from './TrackPlayContain/trackplaycontain';
import TrackPlayLikeDiz from './TrackPlayLikeDiz/trackplaylikediz';
import Volumeblock from './Volumeblock/volumeblock';
import './bar.css';

function Bar({loading}){
    return <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress"></div>
            <div className="bar__player-block">
              <div className="bar__player player">

                <ControlPanel/>

                <div className="player__track-play track-play">
                <TrackPlayContain loading={loading}/>
                <TrackPlayLikeDiz />            

                  
                </div>
              </div>
              <Volumeblock />              
            </div>
          </div>
        </div>;
        }
        export default Bar;