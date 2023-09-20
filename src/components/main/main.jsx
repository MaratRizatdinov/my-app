import React from 'react'
import Navigation from './navigation/navigation'
import Centerblock from './centerblock/centerblock'
import Sidebar from './sidebar/sidebar'

import * as S from './main.style'

function Main({ loading, addError, setIsUser }) {
    return (
        <S.Main>
            <Navigation setIsUser={setIsUser} />
            <Centerblock loading={loading} addError={addError} />
            <Sidebar loading={loading} />
        </S.Main>
    )
}

export default Main
