import React , {useState} from 'react';
import Logotype from './logotype/logotype';
import Navburger from './navburger/navburger';
import Navmenu from './navmenu/navmenu';
import './navigation.css';

function Navigation(){

  const [activeIndex, setActiveIndex] = useState(true);
  console.log(activeIndex);


return <nav className="main__nav nav">

            <Logotype/>  
            <Navburger isActive ={activeIndex} clickBurger ={()=>setActiveIndex(!activeIndex)} />    
            <Navmenu isActive ={activeIndex}/>                                        
          </nav>;
}
export default Navigation;