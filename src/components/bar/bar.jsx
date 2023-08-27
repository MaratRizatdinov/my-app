import React from 'react';
import ControlPanel from './ControlPanel/controlpanel';
import TrackPlayContain from './TrackPlayContain/trackplaycontain';
import TrackPlayLikeDiz from './TrackPlayLikeDiz/trackplaylikediz';
import Volumeblock from './Volumeblock/volumeblock';

import * as S from './bar.style'

function Bar({loading , trackSelect}){
    return <S.Bar>
              <S.BarContent>
                <S.BarPlayerProgress></S.BarPlayerProgress>
                <S.BarPlayerBlock>
                  <S.BarPlayer>
                    <ControlPanel/>
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