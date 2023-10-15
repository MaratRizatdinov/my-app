import { styled } from 'styled-components'
import { FilterButton } from '../filterblock.style'

export const FilterGenreBlock = styled.div`
    position: relative;
    margin-right: 10px;
`
export const FilterGenreList = styled.div`
    position: absolute;
    top: 50px;
    width: 248px;
    height: 305px;
    background-color: #313131;
    z-index: 1;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const FilterGenreContainer = styled.div`
    width: 180px;
    height: 237px;
    background-color: #313131;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 24px;
`


export const FilterGenreButton = styled.button`
    width: 130px;
    height: 30px;
    background-color: #313131;    
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    color: #B672FF;
    border-radius: 15px;
    margin-bottom:10px;
`
export const FilterGenreItems = styled.span`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    &:hover {
        text-decoration: underline;
        color: #b672ff;
    }
`
export const FilterGenreItemsActive = styled(FilterGenreItems)`
    color: blue;
`

export const FilterButtonGenre = styled(FilterButton)`
    border-color: ${(props) => (props.primary === 3 ? '#ad61ff' : '#fff')};
    color: ${(props) => (props.primary === 3 ? '#ad61ff' : '#fff')};
    cursor: pointer;
`
export const FilterGenreCircle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content:center;
    top:-10px;
    left:70px;
    width: 26px;
    height: 26px;
    background-color: #AD61FF;
    border-radius: 25px;    
`
export const FilterGenreCounter = styled.div`
    color: #fff;
    font-size: 13px;
`
