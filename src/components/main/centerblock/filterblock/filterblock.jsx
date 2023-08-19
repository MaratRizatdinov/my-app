import React from 'react';
import './filterblock.css';
import FilterByAuthor from './filterbyauthor/filterbyauthor';
import FilterByYear from './filterbyyear/filterbyyear';

function Filterblock(){
    return <><h2 className="centerblock__h2">Треки</h2>
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterByAuthor />
      <FilterByYear />    
      
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div></>;
}

export default Filterblock;
 
