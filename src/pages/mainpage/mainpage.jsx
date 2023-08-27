 import React, {useState, useEffect} from 'react';
import Main from '../../components/main/main'
import Bar from '../../components/bar/bar';
import Footer from '../../components/footer/footer';
import {Wrapper, Container} from '../../App.style';
import { workArray } from '../../workarray';
import { getAllTracks } from '../../api';

export const MainPage = () =>{

    const [ loading, setLoading ] = useState(true);
    const [ trackList, setTrackList] =useState(workArray);
    
    
    
    useEffect(() => {
        
        getAllTracks().then((track)=>{
            setLoading(false);
            setTrackList(track);                
          });
        
    },[]);

    return (
        <Wrapper>
            <Container>
            <Main loading={loading} tracks={trackList} />        
            <Bar loading={loading}/>    
            <Footer/>                    
            </Container>
        </Wrapper>      
        );
}

