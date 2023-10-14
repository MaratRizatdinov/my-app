import React, { useContext } from 'react'
import * as S from './navmenu.style'
import Navitem from './navitem/navitem'
import { UserContext } from '../../../../context'

function Navmenu({ isActive }) {
    const [isUser, setIsUser] = useContext(UserContext)
    return isActive ? (
        <S.NavMenu>
            <S.MenuList>
                <Navitem address="/" content="Главное" />
                <Navitem address="/favorites" content="Мой плейлист" />
                <Navitem
                    address="/login"
                    content="Выйти"
                    setIsUser={setIsUser}
                />
            </S.MenuList>
        </S.NavMenu>
    ) : (
        ''
    )
}

export default Navmenu
