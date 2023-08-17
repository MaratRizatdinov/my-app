import React from 'react';
import SidebarPerson from './sidebarperson/sidebarperson';
import SidebarItem from './sidebarItem/sidebarItem';
import './sidebar.css';

function Sidebar(){

return <div className="main__sidebar sidebar">
            <SidebarPerson/>
            
            <div className="sidebar__block">
              <div className="sidebar__list">                
                <SidebarItem url="img/playlist01.png"/>
                <SidebarItem url="img/playlist02.png"/>
                <SidebarItem url="img/playlist03.png"/>                
              </div>
            </div>
          </div>;
        }
export default Sidebar;