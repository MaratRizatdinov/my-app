import { TOGGLE_SHUFFLE } from '../types/types'

export function toggleShuffle(list) {
    return {
        type: TOGGLE_SHUFFLE,
        shuffleList: list,
    }
}
