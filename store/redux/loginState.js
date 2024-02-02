import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
    name: "loginState",
    initialState: {
        isLoggedIn: false,
        userData: null
    },
    reducers: {
        logUserIn: (state, action) => {
            state.isLoggedIn = true
            state.userData = action.payload
        },
        logUserOut: (state, action) => {
            state.isLoggedIn = false
            state.userData = null
        },
    }
})

export const logUserIn = loginSlice.actions.logUserIn
export const logUserOut = loginSlice.actions.logUserOut
export default loginSlice.reducer