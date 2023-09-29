import React, { useState } from 'react'
import FilterByAuthor from './filterbyauthor/filterbyauthor'
import FilterByYear from './filterbyyear/filterbyyear'
import FilterByGenre from './filterbygenre/filterbygenre'
import * as S from './filterblock.style'
import { useLocation } from 'react-router-dom'


function Filterblock() {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()    
    const pageTitle = location.pathname == '/' ? 'Треки' : 'Мои треки'
    const displayFilter=location.pathname == '/' ? 'flex' : 'none'

    

    return (
        <>
            <S.CenterBlockH2>{pageTitle}</S.CenterBlockH2>
            <S.CenterBlockFilter style={{display:displayFilter}}>
                <S.CenterBlockTitle>Искать по:</S.CenterBlockTitle>
                <FilterByAuthor
                    isActive={activeIndex}
                    onShow={() =>
                        activeIndex !== 1
                            ? setActiveIndex(1)
                            : setActiveIndex(0)
                    }
                />
                <FilterByYear
                    isActive={activeIndex}
                    onShow={() =>
                        activeIndex !== 2
                            ? setActiveIndex(2)
                            : setActiveIndex(0)
                    }
                />
                <FilterByGenre
                    isActive={activeIndex}
                    onShow={() =>
                        activeIndex !== 3
                            ? setActiveIndex(3)
                            : setActiveIndex(0)
                    }
                />
            </S.CenterBlockFilter>
        </>
    )
}

export default Filterblock
