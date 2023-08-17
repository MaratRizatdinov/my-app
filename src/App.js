//import logo from './logo.svg';
import React from 'react';
import "./App.css";
import Main from './components/main/main'
import Bar from './components/bar/bar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
     <div className="wrapper">
      <div className="container">
        <Main/>        
        <Bar/>    
        <Footer/>          
        
      </div>
    </div>
      
    </div>
  );
}

export default App;
