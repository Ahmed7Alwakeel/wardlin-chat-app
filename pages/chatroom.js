
import ChatRoom from "@/components/chat/ChatRoom";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        localStorage.setItem('chat', true)
    }, [])
    return (
        <>
            <ChatRoom />
        </>
    );
}

export default ProtectedRoutes(Index);