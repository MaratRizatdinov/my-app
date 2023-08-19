import React, { useState } from 'react';
import './filterbyauthor.css';

function FilterByAuthor(){
    const [active, setActive] =useState(false);
    // console.log(active);
    const openClass = active ? "filter__button button-author _btn-text _btn-text-open  " : "filter__button button-author _btn-text";
    return   <div className='filter__author-block'>
                <div className={openClass} onClick={()=>setActive(!active)}>
                 исполнителю
                </div>
                { !active ? "": <div className='filter__author-list'>
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