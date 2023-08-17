import React from 'react';
import Logotype from './logotype/logotype';
import Navburger from './navburger/navburger';
import Navmenu from './navmenu/navmenu';
import './navigation.css';

function Navigation(){

return <nav className="main__nav nav">
            <Logotype/>  
            <Navburger/>    
            <Navmenu/>                                        
          </nav>;
}
export default Navigation;