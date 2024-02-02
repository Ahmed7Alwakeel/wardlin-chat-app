
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        localStorage.setItem('chat', true)
    }, [])
    return (
        <div>
            test
        </div>
    );
}

export default ProtectedRoutes(Index);