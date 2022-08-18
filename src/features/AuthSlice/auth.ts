import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


export interface AuthInterface {
    username?: string
    pwd?: string
    accessToken?: string
    roles?: number[]
}

// setAuth: (state, action: PayloadAction<AuthInterface>) => {
//     state = {...state, ...action.payload }
// }

// const setAuth = createAsyncThunk(
//     'auth/setAuth',
//     async (newAuth) => {
//         const response = await ()
//     }
// )


const initialState: AuthInterface = {
    username: '',
    pwd: '',
    accessToken: '',
    roles: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers: 
})


// export const { setAuth } = authSlice.actions;

export const useAuth = () => useSelector((state: RootState) => state.auth)

export default authSlice.reducer;