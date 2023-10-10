import { CHANGE_MODE_NAME } from '../types/types'

export function changeModeName(mode) {
    return {
        type: CHANGE_MODE_NAME,
        mode: mode,
    }
}
