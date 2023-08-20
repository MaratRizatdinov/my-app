import React from 'react';
import * as S from './filterbygenre.style'



function FilterByGenre({isActive, onShow }){
    
    // const openClass = isActive===3 ? "filter__button button-genre _btn-text _btn-text-open  " : "filter__button button-genre _btn-text";
    return   <S.FilterGenreBlock>
                <S.FilterButtonGenre primary={isActive} onClick={onShow}>
                 жанру
                </S.FilterButtonGenre>
                { isActive!==3 ? "": <S.FilterGenreList>
                    <S.FilterGenreContainer>
                        <S.FilterGenreItems href='#'>Хип-Хоп</S.FilterGenreItems>
                        <S.FilterGenreItems href='#'>Техно</S.FilterGenreItems>
                        <S.FilterGenreItems href='#'>Поп-музыка</S.FilterGenreItems>
                        <S.FilterGenreItems href='#'>Инди</S.FilterGenreItems>                                                
                    </S.FilterGenreContainer>                    
                </S.FilterGenreList>}                
            </S.FilterGenreBlock>
            
            
}

export default FilterByGenre;