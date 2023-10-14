import {
    SET_ACCESS_TOKEN,
    SET_REFRESH_TOKEN,
    
} from '../types/types'

export function setAccessToken(accessToken) {
    return {
        type: SET_ACCESS_TOKEN,
        accessToken: accessToken,
    }
}
export function setRefreshToken(refreshToken) {
    return {
        type: SET_REFRESH_TOKEN,
        refreshToken: refreshToken,
    }
}
