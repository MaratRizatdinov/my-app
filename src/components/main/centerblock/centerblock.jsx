import React from 'react';
import Searchblock from './searchblock/searchblock';
import Filterblock from './filterblock/filterblock';
import Contentblock from './contentblock/contentblock';
import "./centerblock.css"

function Centerblock(){

return <div className="main__centerblock centerblock">
            <Searchblock/>  
            <Filterblock/>    
            <Contentblock/>                  
            
          </div>;
          }
export default Centerblock;