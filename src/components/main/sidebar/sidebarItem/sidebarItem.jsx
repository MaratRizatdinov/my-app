import React from 'react';
import './sidebarItem.css';
import Skeleton from '../../../skeleton/skeleton';

function SidebarItem(props){
    return <div className="sidebar__item">
      { props.loading ? <Skeleton width='250px' height='150px' /> : <a className="sidebar__link" href="#">
      <img
        className="sidebar__img"
        src={props.url}
        alt="day's playlist"
      />
    </a>}

    
  </div>;
}

export default SidebarItem;


