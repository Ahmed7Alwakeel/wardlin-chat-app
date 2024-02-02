
import { addToChat, clearChat } from "@/store/redux/chatMessages";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ChatForm = () => {
    const [message, setMessage] = useState("")
    const messages = useSelector(store => store.chatMessages.messages)
    const dispatch = useDispatch()
    const sendMessage = () => {
        if (message != "") {
            dispatch(addToChat(message))
            setMessage("")
        }
    }
    const clearChatFun = () => {
        dispatch(clearChat())
    }

    return (
        <div className="form">
            <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Type your message"
                type="text"
            />
            <div className="buttons-group">
                <button type="submit" onClick={sendMessage}>Send</button>
                {messages?.length > 0 && <button className="clear" onClick={clearChatFun}>Clear</button>}
            </div>

        </div>
    );
}

export default ChatForm;