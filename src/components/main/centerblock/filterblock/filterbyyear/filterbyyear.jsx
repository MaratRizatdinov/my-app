import React from 'react';
import * as S from './filterbyyear.style'



function FilterByYear({isActive, onShow }){
    
    
    return   <S.FilerYearBlock>
                <S.FilterButtonYear primary={isActive} onClick={onShow}>
                 году выпуска
                </S.FilterButtonYear>
                { isActive!==2 ? "": <S.FilerYearList>
                    <S.FilerYearContainer>
                        <S.FilerYearItems href='#'>2000</S.FilerYearItems>
                        <S.FilerYearItems href='#'>2005</S.FilerYearItems>
                        <S.FilerYearItems href='#'>2010</S.FilerYearItems>
                        <S.FilerYearItems href='#'>2015</S.FilerYearItems>
                        <S.FilerYearItems href='#'>2020</S.FilerYearItems>
                        <S.FilerYearItems href='#'>2023</S.FilerYearItems>                        
                    </S.FilerYearContainer>                    
                </S.FilerYearList>}
                
            </S.FilerYearBlock>         
            
}

export default FilterByYear;