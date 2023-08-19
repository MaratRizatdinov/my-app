import React from 'react';
import './filterblock.css';
import FilterByAuthor from './filterbyauthor/filterbyauthor';
import FilterByYear from './filterbyyear/filterbyyear';
import FilterByGenre from './filterbygenre/filterbygenre';

function Filterblock(){
    return <><h2 className="centerblock__h2">Треки</h2>
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterByAuthor />
      <FilterByYear />   
      <FilterByGenre />         
      
    </div></>;
}

export default Filterblock;
 
