import React, { useState } from 'react';
import './filterbyyear.css';

function FilterByYear(){
    const [active, setActive] =useState(false);
    console.log(active);
    const openClass = active ? "filter__button button-year _btn-text _btn-text-open  " : "filter__button button-year _btn-text";
    return   <div className='filter__year-block'>
                <div className={openClass} onClick={()=>setActive(!active)}>
                 году выпуска
                </div>
                { !active ? "": <div className='filter__year-list'>
                    <div className='filter__year-container'>
                        <a href='#' className='filter__year-items'>2000</a>
                        <a href='#' className='filter__year-items'>2005</a>
                        <a href='#' className='filter__year-items'>2010</a>
                        <a href='#' className='filter__year-items'>2015</a>
                        <a href='#' className='filter__year-items'>2020</a>
                        <a href='#' className='filter__year-items'>2023</a>                        
                    </div>                    
                </div>}
                
            </div>
            
            
}

export default FilterByYear;