import {styled} from 'styled-components';
import {FilterButton} from '../filterblock.style'

export const FilterAuthorBlock = styled.div`
    position: relative;
    margin-right: 10px;
`
export const FilterAuthorList = styled.div`
    position: absolute;
    top: 50px;
    width: 270px;
    height: 305px;
    background-color: #313131;
    z-index: 1;
    border-radius: 12px;
    display: flex;      
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const FilterAuthorContainer = styled.div`
    width: 230px;
    height: 237px;
    background-color: #313131;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const FilterAuthorButton = styled.button`
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
`
export const FilterAuthorItems = styled.span`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    &:hover{
        text-decoration: underline;
        color: #B672FF;
    }    
`
export const FilterAuthorItemsActive = styled(FilterAuthorItems)`    
    color: blue;
`
export const FilterAuthorCircle = styled.div`
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
export const FilterAuthorCounter = styled.div`
    color: #fff;
    font-size: 13px;
`



export const FilterButtonAuthor=styled(FilterButton)`
    border-color: ${(props)=>props.primary===1 ? '#ad61ff' :'#fff' };
    color: ${(props)=>props.primary===1 ? '#ad61ff' :'#fff' };
    cursor: pointer;
`