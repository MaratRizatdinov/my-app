import React from 'react';
import Navigation from './navigation/navigation';
import Centerblock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';
import './main.css';

function Main(){
return <main className="main">
          <Navigation/>          
          <Centerblock/>          
          <Sidebar/>
          
</main>;
}

export default Main;