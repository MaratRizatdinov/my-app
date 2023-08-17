import React from 'react';
import './contentblock.css';
import Titleblock from './titleblock/titleblock';
import Trackblock from './trackblock/trackblock';

function Contentblock(){

return <div className="centerblock__content">
              <Titleblock/>
              <Trackblock/>             
              
            </div>;
          }

          export default Contentblock;