import { FILTER_BY_YEAR } from '../types/types'

export function setFilterByYear(filterYear) {
    return {
        type: FILTER_BY_YEAR,
        filterYear: filterYear,
    }
}
