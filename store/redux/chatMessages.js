import { createSlice } from "@reduxjs/toolkit";
const chatMessagesSlice = createSlice({
    name: "chatMessages",
    initialState: {
        messages: []
    },
    reducers: {
        addToChat: (state, action) => {
            state.messages.push(action.payload)
        },
        clearChat: (state, action) => {
            state.messages = []
        }

    }
})

export const addToChat = chatMessagesSlice.actions.addToChat
export const clearChat = chatMessagesSlice.actions.clearChat
export default chatMessagesSlice.reducer