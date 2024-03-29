import {styled} from 'styled-components';

export const ContentTitle =styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;` 

export const PlayListColumn =styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const PlayListColumn01=styled(PlayListColumn)`
  width: 447px;
`
export const PlayListColumn02=styled(PlayListColumn)`
  width: 321px;
`
export const PlayListColumn03=styled(PlayListColumn)`
  width: 245px;
`
export const PlayListColumn04=styled(PlayListColumn)`
  width: 60px;
  text-align: end;
`
export const PlayListTitleSvg =styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`