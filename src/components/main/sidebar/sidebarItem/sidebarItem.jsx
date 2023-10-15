import React from 'react'
import * as S from './sidebarItem.style'
import Skeleton from '../../../skeleton/skeleton'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function SidebarItem(props) {
    let navigate = useNavigate()
    
    const loadingMode = useSelector((s) => s.state.loadingMode)

    const handleClick = (event) => {
        event.preventDefault()        
        navigate(`/categories/${props.id}`)
    
    }
    
    return (
        <S.SidebarItem>
            {loadingMode ? (
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
