import { styled } from 'styled-components'
import { FilterButton } from '../filterblock.style'

export const FilerYearBlock = styled.div`
    position: relative;
    margin-right: 10px;
`
export const FilerYearList = styled.div`
    position: absolute;
    top: 50px;
    width: 221px;
    height: 196px;
    background-color: #313131;
    z-index: 1;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FilerYearContainer = styled.div`
    width: 183px;
    height: 128px;
    background-color: #313131;
    // overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const FilerYearItems = styled.span`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    &:hover {
        text-decoration: underline;
        color: #b672ff;
    }
`
export const FilerYearItemsActive = styled(FilerYearItems)`
    color: blue;
`
export const FilterButtonYear = styled(FilterButton)`
    border-color: ${(props) => (props.primary === 2 ? '#ad61ff' : '#fff')};
    color: ${(props) => (props.primary === 2 ? '#ad61ff' : '#fff')};
    cursor: pointer;
`
export const FilterYearCircle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content:center;
    top:-10px;
    left:120px;
    width: 26px;
    height: 26px;
    background-color: #AD61FF;
    border-radius: 25px;    
`
export const FilterYearContent = styled.div`
    color: #fff;
    font-size: 13px;
`
