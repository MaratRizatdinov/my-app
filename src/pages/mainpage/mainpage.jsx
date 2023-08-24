 import React, {useState, useEffect} from 'react';
import Main from '../../components/main/main'
import Bar from '../../components/bar/bar';
import Footer from '../../components/footer/footer';
import {Wrapper, Container} from '../../App.style';

export const MainPage = () =>{

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    });

    return (
        <Wrapper>
            <Container>
            <Main loading={loading} />        
            <Bar loading={loading}/>    
            <Footer/>                    
            </Container>
        </Wrapper>      
        );
}

