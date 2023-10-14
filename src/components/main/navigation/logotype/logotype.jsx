import React from 'react'
import * as S from './logotype.style'
import { useNavigate } from 'react-router-dom'

function Logotype() {
    const navigate = useNavigate()
    return (
        <S.NavLogo>
            <S.LogoImage
                src="img/logo.png"
                alt="logo"
                onClick={() => navigate('/')}
            />
        </S.NavLogo>
    )
}
export default Logotype
