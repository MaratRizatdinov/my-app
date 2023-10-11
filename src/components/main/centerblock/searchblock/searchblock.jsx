import React from 'react'
import * as S from './searchblock.style'
import { useDispatch } from 'react-redux'
import { setFilterBySubstring } from '../../../../store/actions/creators/filterBySubstring'
import { useState, useEffect } from 'react'

function Searchblock() {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    function onChangeValue(event) {
        setValue(event.target.value)
    }
    useEffect(() => {        
        dispatch(setFilterBySubstring(value))
    }, [value])

    return (
        <S.CenterBlockSearch>
            <S.SearchSvg>
                <use xlinkHref="../img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText
                type="search"
                placeholder="Поиск"
                name="search"
                value={value}
                onChange={onChangeValue}
            />
        </S.CenterBlockSearch>
    )
}

export default Searchblock
