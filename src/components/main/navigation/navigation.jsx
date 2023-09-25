import React, { useState } from 'react'
import Logotype from './logotype/logotype'
import Navburger from './navburger/navburger'
import Navmenu from './navmenu/navmenu'
import * as S from './navigation.style'

function Navigation() {
    const [activeIndex, setActiveIndex] = useState(true)
    const clickBurger = () =>
        setActiveIndex((prevActiveIndex) => !prevActiveIndex)

    return (
        <S.MainNav>
            <Logotype />
            <Navburger isActive={activeIndex} clickBurger={clickBurger} />
            <Navmenu isActive={activeIndex} />
        </S.MainNav>
    )
}
export default Navigation
