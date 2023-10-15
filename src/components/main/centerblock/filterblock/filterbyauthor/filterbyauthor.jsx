import React from 'react'
import * as S from './filterbyauthor.style'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterByAuthor } from '../../../../../store/actions/creators/filterByAuthor'

function FilterByAuthor({ isActive, onShow }) {
    const dispatch = useDispatch()
    const array = useSelector((s) => s.state.playlist)
    const authorArray = useSelector((s) => s.state.filterAuthors)

    const newArr = array.map((key) => {
        return key.author
    })

    const UniqueArrayOfAuthor = [...new Set(newArr.sort())]

    function handleClick(key) {
        if (authorArray.includes(key)) {
            dispatch(
                setFilterByAuthor(authorArray.filter((item) => item != key))
            )
        } else {
            dispatch(setFilterByAuthor([...authorArray, key]))
        }
    }
    function clearFilter(){
        dispatch(setFilterByAuthor([]))
    }

    const listOfItems = UniqueArrayOfAuthor.map((key) => {
        return (
            <S.FilterAuthorItems
                href="#"
                key={key}
                onClick={() => handleClick(key)}
            >
                {authorArray.includes(key) ? (
                    <S.FilterAuthorItemsActive>{key}</S.FilterAuthorItemsActive>
                ) : (
                    <span>{key}</span>
                )}
            </S.FilterAuthorItems>
        )
    })

    return (
        <S.FilterAuthorBlock>
            {authorArray.length ? (
                <S.FilterAuthorCircle>
                    <S.FilterAuthorCounter>
                        {authorArray.length}
                    </S.FilterAuthorCounter>
                </S.FilterAuthorCircle>
            ) : null}

            <S.FilterButtonAuthor primary={isActive} onClick={onShow}>
                исполнителю
            </S.FilterButtonAuthor>
            {isActive !== 1 ? (
                ''
            ) : (
                <S.FilterAuthorList>
                    <S.FilterAuthorButton onClick={clearFilter}>Oчистить</S.FilterAuthorButton>
                    <S.FilterAuthorContainer>
                        {listOfItems}
                    </S.FilterAuthorContainer>
                </S.FilterAuthorList>
            )}
        </S.FilterAuthorBlock>
    )
}

export default FilterByAuthor
