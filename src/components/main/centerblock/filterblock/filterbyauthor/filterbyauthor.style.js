import {styled} from 'styled-components';
import {FilterButton} from '../filterblock.style'

export const FilterAuthorBlock = styled.div`
    position: relative;
    margin-right: 10px;
`
export const FilterAuthorList = styled.div`
    position: absolute;
    top: 50px;
    width: 448px;
    height: 305px;
    background-color: #313131;
    z-index: 1;
    border-radius: 12px;
    display: flex;      
    align-items: center;
    justify-content: center;
`
export const FilterAuthorContainer = styled.div`
    width: 380px;
    height: 237px;
    background-color: #313131;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const FilterAuthorItems = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    &:hover{
        text-decoration: underline;
        color: #B672FF;
    }    
`
export const FilterButtonAuthor=styled(FilterButton)`
    border-color: ${(props)=>props.primary===1 ? '#ad61ff' :'#fff' };
    color: ${(props)=>props.primary===1 ? '#ad61ff' :'#fff' };
    cursor: pointer;
`