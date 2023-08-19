import React,{useState} from 'react';
import './filterblock.css';
import FilterByAuthor from './filterbyauthor/filterbyauthor';
import FilterByYear from './filterbyyear/filterbyyear';
import FilterByGenre from './filterbygenre/filterbygenre';

function Filterblock(){
    const [activeIndex, setActiveIndex] = useState(0);
    return <><h2 className="centerblock__h2">Треки</h2>
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterByAuthor isActive={activeIndex} onShow={() => activeIndex!==1 ? setActiveIndex(1):setActiveIndex(0)}/>
      <FilterByYear isActive={activeIndex} onShow={() => activeIndex!==2 ? setActiveIndex(2):setActiveIndex(0)}/>   
      <FilterByGenre isActive={activeIndex} onShow={() => activeIndex!==3 ? setActiveIndex(3):setActiveIndex(0)}/>         
      console.log(activeIndex);
    </div></>;
}

export default Filterblock;
 
