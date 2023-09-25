import React from 'react'
import Navigation from './navigation/navigation'
import Centerblock from './centerblock/centerblock'
import Sidebar from './sidebar/sidebar'

import * as S from './main.style'

function Main({addError}) {
    return (
        <S.Main>
            <Navigation />
            <Centerblock addError={addError} />
            <Sidebar />
        </S.Main>
    )
}

export default Main
