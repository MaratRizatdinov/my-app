
import React, {useState, useEffect} from 'react';
import "./App.css";
import Main from './components/main/main'
import Bar from './components/bar/bar';
import Footer from './components/footer/footer';
import * as S from './App.style';



function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  });

  return (
    <div className="App">
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <Main loading={loading}/>        
          <Bar loading={loading}/>    
          <Footer/>                    
        </S.Container>
      </S.Wrapper>      
    </div>
  );
}

export default App;
