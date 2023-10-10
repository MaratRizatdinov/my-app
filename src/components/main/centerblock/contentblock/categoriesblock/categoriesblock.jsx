import React from 'react'
import Trackblock from '../trackblock/trackblock'
import { useParams } from 'react-router-dom'

export const CategoriesBlock = () => {
    const params = useParams()
    return <Trackblock page = {params.pageId}/>
}
