import React from 'react'
import * as S from './sidebarItem.style'
import Skeleton from '../../../skeleton/skeleton'
import { useNavigate } from 'react-router-dom'
import { exitFromTracksPage } from '../../../../store/actions/creators/exitFromTracksPage'
import { useDispatch } from 'react-redux'

function SidebarItem(props) {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(exitFromTracksPage())
        navigate(`/categories/${props.id}`)
    }

    return (
        <S.SidebarItem>
            {props.loading ? (
                <Skeleton width="250px" height="150px" />
            ) : (
                <S.SidebarLink onClick={handleClick}>
                    <S.SidebarImg src={props.url} alt="day's playlist" />
                </S.SidebarLink>
            )}
        </S.SidebarItem>
    )
}

export default SidebarItem
