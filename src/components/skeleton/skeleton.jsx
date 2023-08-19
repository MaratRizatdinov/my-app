import React from 'react';

function Skeleton (props){
  const container ={
    width:props.width,
    height:props.height,
    background: '#313131',
  };
  return <div className='skelet' style={container}></div>
}

export default Skeleton;