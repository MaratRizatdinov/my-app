import React,{useState} from 'react';
import {GlobalStyle} from './App.style';
import {AppRoutes} from './routes'; 

function App() {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(false);

  const loginButtonClick=()=>{
      setUser(!user);
      user ? delete localStorage.token : localStorage.setItem('token', 'token');   
    
  }

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes func={loginButtonClick} token={token} user={user}/>      
    </div>
  );
}
export default App;
