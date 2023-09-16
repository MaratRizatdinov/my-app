import {styled} from 'styled-components';


export const PlayerControls = styled.div`
  display: -webkit-box; 
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
` 
export const PlayerButton =styled.div`
padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const PlayerButtonPrev =styled(PlayerButton)`
  margin-right: 23px;  
`
export const PlayerButtonPlay =styled(PlayerButton)`
  margin-right: 23px;
`
export const PlayerButtonNext =styled(PlayerButton)`
  margin-right: 28px;
  fill: #a53939;
}`
export const PlayerButtonRepeat =styled(PlayerButton)`
  margin-right: 24px;  
}
`
export const PlayerButtonShuffle =styled(PlayerButton)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
`
export const PlayerButtonPrevSvg =styled.svg`
  width: 15px;
  height: 14px;
`
export const PlayerButtonPlaySvg =styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const PlayerButtonNextSvg =styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const PlayerButtonRepeatSvg =styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke:${props=> props.button_color=='white' ? '#ffffff' : "#696969"}
`
export const PlayerButtonShuffleSvg =styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
