
import { logUserOut } from "@/store/redux/loginState";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Navbar = () => {
    const router = useRouter()
    const isLoggedIn = useSelector(store => store.loginState.isLoggedIn)
    const dispatch = useDispatch()

    const handleAuth = () => {
        if (isLoggedIn) {
            dispatch(logUserOut())
            router.push('/')
        } else {
            router.push('/auth/login')
        }
    }
    return (
        <div className="navbar-container">
            <div className="logo-container" onClick={() => router.push("/")}>
                <Image
                    alt="logo"
                    src="/icons/logo.svg"
                    width={40}
                    height={40}
                />
            </div>
            <div className="links">
                <Link className={`link ${router.asPath == '/' ? 'active' : ""}`} passHref href={"/"}>Home</Link>
                <Link onClick={()=>localStorage.setItem('chat', true)} className={`link ${router.asPath == '/chat' ? 'active' : ""}`} passHref href={isLoggedIn ? "/chat" : "/auth/login"}>Chat room</Link>
            </div>
            <div className="login-icons" onClick={() => handleAuth()}>
                <Image
                    alt="logo"
                    src={isLoggedIn ? "/icons/logout.svg" : "/icons/login.svg"}
                    width={25}
                    height={25}
                />
            </div>
        </div>
    );
}

export default Navbar;