import React from 'react'
import * as S from './filterbyyear.style'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterByYear } from '../../../../../store/actions/creators/filterByYear'

function FilterByYear({ isActive, onShow }) {
    const dispatch = useDispatch()
    const typeOfSorting = useSelector((s) => s.state.filterYear)
    const arrayOfYear = ['По умолчанию', 'Сначала новые', 'Сначала старые']

    function handleClick(key) {
        dispatch(setFilterByYear(key))
    }

    const listOfItems = arrayOfYear.map((key) => {
        return (
            <S.FilerYearItems
                href="#"
                key={key}
                onClick={() => handleClick(key)}
            >
                {typeOfSorting == key ? (
                    <S.FilerYearItemsActive>{key}</S.FilerYearItemsActive>
                ) : (
                    <span>{key}</span>
                )}
            </S.FilerYearItems>
        )
    })

    return (
        <S.FilerYearBlock>
            {typeOfSorting !== 'По умолчанию' ? (
                <S.FilterYearCircle>
                    <S.FilterYearContent>
                        {typeOfSorting == 'Сначала новые'
                            ? String.fromCodePoint(8595)
                            : String.fromCodePoint(8593)}
                    </S.FilterYearContent>
                </S.FilterYearCircle>
            ) : null}
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
