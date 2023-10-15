import React from 'react'
import * as S from './navitem.style'
import { useNavigate } from 'react-router-dom'
import { exitFromTracksPage } from '../../../../../store/actions/creators/exitFromTracksPage'
import { useDispatch } from 'react-redux'

function Navitem(props) {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const goToPage = () => {
        if (props.setIsUser) {
            window.localStorage.removeItem('user')
            props.setIsUser(window.localStorage.getItem('user'))
        }
        if (props.content != 'Главное') {
            dispatch(exitFromTracksPage())
        }
        navigate(props.address)
    }

    return (
        <S.MenuItem>
            <S.MenuLink onClick={goToPage}>{props.content}</S.MenuLink>
        </S.MenuItem>
    )
}

export default Navitem
