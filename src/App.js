//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Main from './components/main/main'
import Bar from './components/bar/bar';
import Footer from './components/footer/footer';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  });

  return (
    <div className="App">
     <div className="wrapper">
      <div className="container">
        <Main loading={loading}/>        
        <Bar />    
        <Footer/>          
        
      </div>
    </div>
      
    </div>
  );
}

export default App;
