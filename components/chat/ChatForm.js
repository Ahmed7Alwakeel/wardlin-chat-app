
import { addToChat } from "@/store/redux/chatMessages";
import {  useState } from "react";
import { useDispatch } from "react-redux";

const ChatForm = () => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const sendMessage = () => {
        if (message != "") {
            dispatch(addToChat(message))
            setMessage("")
        }
    }

    return (
        <div className="form">
            <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Type your message"
                type="text"
            />
            <button type="submit" onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatForm;