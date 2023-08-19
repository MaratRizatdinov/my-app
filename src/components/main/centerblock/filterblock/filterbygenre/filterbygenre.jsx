import React, { useState } from 'react';
import './filterbygenre.css';

function FilterByGenre(){
    const [active, setActive] =useState(false);
    // console.log(active);
    const openClass = active ? "filter__button button-genre _btn-text _btn-text-open  " : "filter__button button-genre _btn-text";
    return   <div className='filter__genre-block'>
                <div className={openClass} onClick={()=>setActive(!active)}>
                 жанру
                </div>
                { !active ? "": <div className='filter__genre-list'>
                    <div className='filter__genre-container'>
                        <a href='#' className='filter__genre-items'>Хип-Хоп</a>
                        <a href='#' className='filter__genre-items'>Техно</a>
                        <a href='#' className='filter__genre-items'>Поп-музыка</a>
                        <a href='#' className='filter__genre-items'>Инди</a>                                                
                    </div>                    
                </div>}
                
            </div>
            
            
}

export default FilterByGenre;