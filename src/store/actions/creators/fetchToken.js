import {
    FETCH_ACCESS_TOKEN,
    FETCH_REFRESH_TOKEN,
    
} from '../types/types'

export function fetchAccessToken(accessToken) {
    return {
        type: FETCH_ACCESS_TOKEN,
        accessToken: accessToken,
    }
}
export function fetchRefreshToken(refreshToken) {
    return {
        type: FETCH_REFRESH_TOKEN,
        refreshToken: refreshToken,
    }
}
