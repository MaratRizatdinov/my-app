import React from 'react';
import SidebarPerson from './sidebarperson/sidebarperson';
import SidebarItem from './sidebarItem/sidebarItem';
import * as S from './sidebar.style'


function Sidebar({loading}){

return <S.MainSidebar>
            <SidebarPerson/>
            
            <S.SidebarBlock>
              <S.SidebarList>                
                <SidebarItem url="img/playlist01.png" loading={loading}/>
                <SidebarItem url="img/playlist02.png" loading={loading}/>
                <SidebarItem url="img/playlist03.png" loading={loading}/>                
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>;
        }
export default Sidebar;