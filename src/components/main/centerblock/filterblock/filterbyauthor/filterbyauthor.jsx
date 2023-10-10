import React from 'react'
import * as S from './filterbyauthor.style'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function FilterByAuthor({ isActive, onShow }) {
    const array = useSelector((s) => s.state.playlist)
    const newArr = array.map((key) => {
        return key.author
    })

    const UniqueArrayOfAuthor = [...new Set(newArr.sort())]

    const [authorArr, setAuthorArr] = useState([])

    function handleClick(key) {
        if (authorArr.includes(key)) {
            setAuthorArr(authorArr.filter((item) => item != key))
        } else {
            setAuthorArr([...authorArr, key])
        }
        console.log(authorArr)
    }

    const listOfItems = UniqueArrayOfAuthor.map((key) => {
        return (
            <S.FilterAuthorItems
                href="#"
                key={key}
                onClick={() => handleClick(key)}
            >
                {authorArr.includes(key) ? (
                    <S.FilterAuthorItemsActive>{key}</S.FilterAuthorItemsActive>
                ) : (
                    <span>{key}</span>
                )}
            </S.FilterAuthorItems>
        )
    })

    return (
        <S.FilterAuthorBlock>
            <S.FilterButtonAuthor primary={isActive} onClick={onShow}>
                исполнителю
            </S.FilterButtonAuthor>
            {isActive !== 1 ? (
                ''
            ) : (
                <S.FilterAuthorList>
                    <S.FilterAuthorContainer>
                        {listOfItems}
                    </S.FilterAuthorContainer>
                </S.FilterAuthorList>
            )}
        </S.FilterAuthorBlock>
    )
}

export default FilterByAuthor
