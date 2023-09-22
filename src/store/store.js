import { configureStore } from '@reduxjs/toolkit'
import { TrackReducer } from './reducers/TrackReducer'

const store = configureStore({
    reducer: {
        state: TrackReducer,
    },
})

export default store;
