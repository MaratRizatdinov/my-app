import React from 'react';
import * as S from './filterbyauthor.style'
import { workArray } from '../../../../../workarray';

function FilterByAuthor({isActive, onShow }){

    const array=workArray();
    const newArr =array.map((key)=>{
        return key['track author']});    
    
    const UniqueArrayOfAuthor=[...new Set(newArr.sort())];
    
    const listOfItems = UniqueArrayOfAuthor.map((key)=>{
        return <S.FilterAuthorItems href='#' key={key}>{key}</S.FilterAuthorItems>
    });
    
    return   <S.FilterAuthorBlock>
                <S.FilterButtonAuthor primary={isActive} onClick={onShow}>
                 исполнителю
                </S.FilterButtonAuthor>
                { isActive!==1 ? "": <S.FilterAuthorList>
                    <S.FilterAuthorContainer>
                        {listOfItems} 
                    </S.FilterAuthorContainer>                    
                </S.FilterAuthorList>}                
            </S.FilterAuthorBlock>             
}

export default FilterByAuthor;