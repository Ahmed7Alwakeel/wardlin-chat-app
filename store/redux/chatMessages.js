import { createSlice } from "@reduxjs/toolkit";
const chatMessagesSlice = createSlice({
    name: "chatMessages",
    initialState: {
        messages: []
    },
    reducers: { //function use to change state
        addToChat: (state, action) => {
            //action is a obj created by redux
            //payload prop to transport any extra data we might attach to function
            //object with id key
            state.messages.push(action.payload)
        },
        clearChat: (state, action) => {
            //action is a obj created by redux
            //payload prop to transport any extra data we might attach to function
            //object with id key
            state.messages = []
        }

    }
})

export const addToChat = chatMessagesSlice.actions.addToChat
export const clearChat = chatMessagesSlice.actions.clearChat
export default chatMessagesSlice.reducer