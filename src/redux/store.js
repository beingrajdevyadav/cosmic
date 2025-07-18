import { configureStore } from "@reduxjs/toolkit";
import cosmicReducer from './features/cosmicSlice'

export const store = configureStore({
    reducer:{
        cosmic: cosmicReducer,
    }
})