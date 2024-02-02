import { configureStore } from "@reduxjs/toolkit";
import loginState from "./loginState";
import chatMessages from "./chatMessages";
export const store = configureStore({
    reducer: {
        loginState,
        chatMessages
    }
})