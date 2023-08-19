import React from 'react';
import './filterbygenre.css';

function FilterByGenre({isActive, onShow }){
    
    const openClass = isActive===3 ? "filter__button button-genre _btn-text _btn-text-open  " : "filter__button button-genre _btn-text";
    return   <div className='filter__genre-block'>
                <div className={openClass} onClick={onShow}>
                 жанру
                </div>
                { isActive!==3 ? "": <div className='filter__genre-list'>
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