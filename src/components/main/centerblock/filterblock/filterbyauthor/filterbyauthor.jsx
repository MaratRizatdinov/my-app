import React from 'react';
import './filterbyauthor.css';

function FilterByAuthor({isActive, onShow }){
    // console.log(isActive);
    const openClass = isActive===1 ? "filter__button button-author _btn-text _btn-text-open  " : "filter__button button-author _btn-text";
    return   <div className='filter__author-block'>
                <div className={openClass} onClick={onShow}>
                 исполнителю
                </div>
                { isActive!==1 ? "": <div className='filter__author-list'>
                    <div className='filter__author-container'>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>
                        <a href='#' className='filter__author-items'>DDDD DDDD</a>                        
                    </div>                    
                </div>}
                
            </div>
            
            
}

export default FilterByAuthor;