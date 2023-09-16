import {styled} from 'styled-components';
import {FilterButton} from '../filterblock.style'

export const FilterGenreBlock=styled.div`
    position: relative;
    margin-right: 10px;
`
export const FilterGenreList=styled.div`
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
`
export const FilterGenreContainer=styled.div`
    width: 180px;
    height: 237px;
    background-color: #313131;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const FilterGenreItems=styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    &:hover{
        text-decoration: underline;
        color: #B672FF;
    }
`
export const FilterButtonGenre=styled(FilterButton)`
    border-color: ${(props)=>props.primary===3 ? '#ad61ff' :'#fff' };
    color: ${(props)=>props.primary===3 ? '#ad61ff' :'#fff' };
    cursor: pointer;
`