import React from 'react';
import * as S from './filterbygenre.style'
import { useSelector } from 'react-redux'



function FilterByGenre({isActive, onShow }){
    const array = useSelector((s) => s.state.playlist)    
    const newArr = array.map((key) => {
        return key.genre
    })
    const UniqueArrayOfGenre = [...new Set(newArr.sort())]
    console.log(UniqueArrayOfGenre)
    const listOfItems = UniqueArrayOfGenre.map((key) => {
        return (
            <S.FilterGenreItems href="#" key={key}>
                {key}
            </S.FilterGenreItems>
        )
    })
    
    
    return   <S.FilterGenreBlock>
                <S.FilterButtonGenre primary={isActive} onClick={onShow}>
                 жанру
                </S.FilterButtonGenre>
                { isActive!==3 ? "": <S.FilterGenreList>
                    <S.FilterGenreContainer>
                        {listOfItems}                        
                    </S.FilterGenreContainer>                    
                </S.FilterGenreList>}                
            </S.FilterGenreBlock>
            
            
}

export default FilterByGenre;