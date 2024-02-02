import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ProtectedRoutes = (Component) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const isLoggedIn = useSelector((store) => store.loginState.isLoggedIn);

        useEffect(() => {
            if (router.asPath.includes('auth')) {
                if (isLoggedIn) {
                    router.push('/')
                }
            } else {
                if (!isLoggedIn) {
                    router.push('/auth/login');
                }
            }
        }, [isLoggedIn, router]);

        if (router.asPath.includes('auth')) {
            return isLoggedIn ? null : <Component {...props} />
        } else {
            return isLoggedIn ? <Component {...props} /> : null
        }
    }
    return Wrapper;
};

export default ProtectedRoutes;
