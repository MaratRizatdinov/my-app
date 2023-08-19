import React from 'react';
import Navigation from './navigation/navigation';
import Centerblock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';
import './main.css';

function Main({loading}){
return <main className="main">
          <Navigation/>          
          <Centerblock loading ={loading}/>          
          <Sidebar loading ={loading}/>
          
</main>;
}

export default Main;