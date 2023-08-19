import React from 'react';
import './filterbyauthor.css';
import { workArray } from '../../../../../workarray';

function FilterByAuthor({isActive, onShow }){

    const array=workArray();
    const newArr =array.map((key)=>{
        return key['track author']});    
    
    const UniqueArrayOfAuthor=[...new Set(newArr.sort())];
    
    const listOfItems = UniqueArrayOfAuthor.map((key)=>{
        return <a href='#' className='filter__author-items'key={key}>{key}</a>
    });
    
        
    

    
    const openClass = isActive===1 ? "filter__button button-author _btn-text _btn-text-open  " : "filter__button button-author _btn-text";
    return   <div className='filter__author-block'>
                <div className={openClass} onClick={onShow}>
                 исполнителю
                </div>
                { isActive!==1 ? "": <div className='filter__author-list'>
                    <div className='filter__author-container'>
                        {listOfItems} 
                    </div>                    
                </div>}                
            </div>           
            
}

export default FilterByAuthor;