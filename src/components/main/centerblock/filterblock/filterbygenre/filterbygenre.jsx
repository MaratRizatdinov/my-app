import React from 'react'
import * as S from './filterbygenre.style'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterByGenre } from '../../../../../store/actions/creators/filterByGenre'

function FilterByGenre({ isActive, onShow }) {
    const dispatch = useDispatch()
    const array = useSelector((s) => s.state.playlist)
    const genreArray = useSelector((s) => s.state.filterGenre)
    const newArr = array.map((key) => {
        return key.genre
    })
    const UniqueArrayOfGenre = [...new Set(newArr.sort())]

    function handleClick(key) {
        if (genreArray.includes(key)) {
            dispatch(setFilterByGenre(genreArray.filter((item) => item != key)))
        } else {
            dispatch(setFilterByGenre([...genreArray, key]))
        }
    }
    function clearFilter() {
        dispatch(setFilterByGenre([]))
    }

    const listOfItems = UniqueArrayOfGenre.map((key) => {
        return (
            <S.FilterGenreItems
                href="#"
                key={key}
                onClick={() => handleClick(key)}
            >
                {genreArray.includes(key) ? (
                    <S.FilterGenreItemsActive>{key}</S.FilterGenreItemsActive>
                ) : (
                    <span>{key}</span>
                )}
            </S.FilterGenreItems>
        )
    })

    return (
        <S.FilterGenreBlock>
            {genreArray.length ? (
                <S.FilterGenreCircle>
                    <S.FilterGenreCounter>
                        {genreArray.length}
                    </S.FilterGenreCounter>
                </S.FilterGenreCircle>
            ) : null}

            <S.FilterButtonGenre primary={isActive} onClick={onShow}>
                жанру
            </S.FilterButtonGenre>
            {isActive !== 3 ? null : (
                <S.FilterGenreList>
                    <S.FilterGenreButton onClick={clearFilter}>
                        Очистить
                    </S.FilterGenreButton>
                    <S.FilterGenreContainer>
                        {listOfItems}
                    </S.FilterGenreContainer>
                </S.FilterGenreList>
            )}
        </S.FilterGenreBlock>
    )
}

export default FilterByGenre
