import React from 'react';
import './contentblock.css';
import Titleblock from './titleblock/titleblock';
import Trackblock from './trackblock/trackblock';

function Contentblock({loading}){

return <div className="centerblock__content">
              <Titleblock/>
              <Trackblock loading={loading}/>             
              
            </div>;
          }

          export default Contentblock;