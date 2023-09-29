import { configureStore } from '@reduxjs/toolkit'
import { TrackReducer } from './reducers/TrackReducer'
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        state: TrackReducer,
    },
    middleware:[thunk],
})

export default store;
