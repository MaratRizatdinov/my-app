import React from 'react'
import * as S from './filterbyyear.style'
import { useSelector } from 'react-redux'

function FilterByYear({ isActive, onShow }) {
    const array = useSelector((s) => s.state.playlist)
    const newArr = array.map((key) => {
        if (key['release_date'] == null) return 'Дата неизвестна'
        return key['release_date'].slice(0, 4)
    })
    
    const UniqueArrayOfYear = [...new Set(newArr.sort())]

    const listOfItems = UniqueArrayOfYear.map((key) => {
        return (
            <S.FilerYearItems href="#" key={key}>
                {key}
            </S.FilerYearItems>
        )
    })

    return (
        <S.FilerYearBlock>
            <S.FilterButtonYear primary={isActive} onClick={onShow}>
                году выпуска
            </S.FilterButtonYear>
            {isActive !== 2 ? (
                ''
            ) : (
                <S.FilerYearList>
                    <S.FilerYearContainer>{listOfItems}</S.FilerYearContainer>
                </S.FilerYearList>
            )}
        </S.FilerYearBlock>
    )
}

export default FilterByYear
