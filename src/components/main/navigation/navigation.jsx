import React , {useState} from 'react';
import Logotype from './logotype/logotype';
import Navburger from './navburger/navburger';
import Navmenu from './navmenu/navmenu';
import * as S from './navigation.style'



function Navigation(){

  const [activeIndex, setActiveIndex] = useState(true);



return <S.MainNav>

            <Logotype/>  
            <Navburger isActive ={activeIndex} clickBurger ={()=>setActiveIndex(!activeIndex)} />    
            <Navmenu isActive ={activeIndex}/>                                        
          </S.MainNav>;
}
export default Navigation;