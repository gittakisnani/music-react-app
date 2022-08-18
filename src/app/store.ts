import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer  from '../features/AuthSlice/auth'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch