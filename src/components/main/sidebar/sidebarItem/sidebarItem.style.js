import {styled} from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarItem=styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child){
    margin-bottom: 30px;
  }
`
export const SidebarLink=styled(Link)`
  width: 100%;
  height: 100%;
`
export const SidebarImg=styled.img`
  width: 100%;
  height: auto;
`