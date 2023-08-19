import React from 'react';
import Searchblock from './searchblock/searchblock';
import Filterblock from './filterblock/filterblock';
import Contentblock from './contentblock/contentblock';
import "./centerblock.css"

function Centerblock({loading}){

return <div className="main__centerblock centerblock">
            <Searchblock/>  
            <Filterblock/>    
            <Contentblock loading={loading}/>                  
            
          </div>;
          }
export default Centerblock;