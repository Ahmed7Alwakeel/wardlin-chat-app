import ChatForm from "./ChatForm";
import { useSelector } from "react-redux";

const ChatRoom = () => {
    const messages = useSelector(store => store.chatMessages.messages)
    return (
        <div className="chat-room-container">
            <div className="overlay"></div>
            <div className="chat-room">
                <div className="message-container">
                    {messages?.map((msg, index) => (
                        <div className="message-wrapper" key={index}>
                            <p className={"message"} key={index}>{msg}</p>
                        </div>
                    ))}
                </div>
                <ChatForm />
            </div>
        </div>
    );
}

export default ChatRoom;