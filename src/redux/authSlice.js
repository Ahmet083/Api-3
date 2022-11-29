import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    token: null
}
export const authSlice = createSlice({
name: 'authSlice',
initialState,
reducer: {
    setToken: (state, action) => {
        localStorage.setItem('token', action.payload)
        state.token = action.payload
    },

    removeToken: (state, action) => {
        localStorage.removeItem('token', action.payload)
        state.token = null
    }
}
})

export const {setToken, removeToken} = authSlice.actions

export default authSlice.reducer