import { useGetAllFavoritesQuery } from "../store/services/favorite"
import { useSelector, useDispatch } from "react-redux"
import { getNewAccessToken } from "../api"
import { setAccessToken } from "../store/actions/creators/fetchToken"
import { useNavigate } from "react-router-dom"
import { exitFromTracksPage } from "../store/actions/creators/exitFromTracksPage"


export const useFavorites=()=>{

    const token = useSelector((s) => s.state.accessToken)
    const dispatch= useDispatch()
    const refreshToken = window.localStorage.getItem('refresh')
    const navigate = useNavigate()

    const {data: favoritePlayList, error} = useGetAllFavoritesQuery(token)

    if(error){
        getNewAccessToken(refreshToken)
        .then((data) => {
            dispatch(setAccessToken(data.access))
            return favoritePlayList
        })
        .catch((e) => {
            dispatch(exitFromTracksPage())
            window.localStorage.removeItem('refresh')                        
            navigate('/login')
        })
    }
    
    return favoritePlayList
}