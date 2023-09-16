import React from 'react';
import * as S from './sidebarItem.style';
import Skeleton from '../../../skeleton/skeleton';

function SidebarItem(props){
    return <S.SidebarItem>
      { props.loading ? <Skeleton width='250px' height='150px' /> : 
      <S.SidebarLink to={`/categories/${props.id}`}>
        <S.SidebarImg
          src={props.url}
          alt="day's playlist"
        />
      </S.SidebarLink>}

    
  </S.SidebarItem>;
}

export default SidebarItem;


