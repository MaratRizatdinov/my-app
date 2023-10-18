import { useSelector, useDispatch } from "react-redux"
import { useAddFavoriteTrackMutation } from "../store/services/favorite"
import { useDeleteFavoriteTrackMutation } from "../store/services/favorite"
import { useNavigate } from "react-router-dom"
import { getNewAccessToken } from "../api"
import { setAccessToken } from "../store/actions/creators/fetchToken"
import { exitFromTracksPage } from "../store/actions/creators/exitFromTracksPage"


export const useLike=(elem)=>{
    
    const dispatch= useDispatch()
    const navigate = useNavigate()
    
    
    const token = useSelector((s) => s.state.accessToken)
    const [addFavorite] = useAddFavoriteTrackMutation()
    const [deleteFavorite] = useDeleteFavoriteTrackMutation()
    const refreshToken = window.localStorage.getItem('refresh')



    const handleClickToLike = (elem) => {
        addFavorite({ id: elem.id, accessToken: token })
            .unwrap()
            .catch((error) => {
                getNewAccessToken(refreshToken)
                    .then((data) => {
                        dispatch(setAccessToken(data.access))
                        addFavorite({ id: elem.id, accessToken: data.access })
                    })
                    .catch((error) => {
                        dispatch(exitFromTracksPage())
                        window.localStorage.removeItem('refresh')                        
                        navigate('/login')
                    })
            })
    }
    const handleClickToDizLike = (elem) => {
        deleteFavorite({ id: elem.id, accessToken: token })
            .unwrap()
            .catch((error) => {
                getNewAccessToken(refreshToken)
                    .then((data) => {
                        dispatch(setAccessToken(data.access))
                        deleteFavorite({
                            id: elem.id,
                            accessToken: data.access,
                        })
                    })
                    .catch((error) => {
                        dispatch(exitFromTracksPage())
                        window.localStorage.removeItem('refresh')
                        // window.localStorage.removeItem('access')
                        navigate('/login')
                    })
            })
    }
    return [handleClickToLike,handleClickToDizLike]
}
