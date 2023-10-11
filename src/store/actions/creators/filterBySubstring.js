import { FILTER_BY_SUBSTRING } from '../types/types'

export function setFilterBySubstring(filterSubstring) {
    return {
        type: FILTER_BY_SUBSTRING,
        filterSubstring: filterSubstring,
    }
}
