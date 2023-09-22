import React from 'react';
import SidebarPerson from './sidebarperson/sidebarperson';
import SidebarItem from './sidebarItem/sidebarItem';
import * as S from './sidebar.style'


function Sidebar(){

return <S.MainSidebar>
            <SidebarPerson/>
            
            <S.SidebarBlock>
              <S.SidebarList>                
                <SidebarItem id ='1' url="img/playlist01.png"/>
                <SidebarItem id ='2' url="img/playlist02.png"/>
                <SidebarItem id ='3' url="img/playlist03.png"/>                
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>;
        }
export default Sidebar;