import AuthForm from "@/components/auth/AuthForm";
import FormHeader from "@/components/auth/FormHeader";
import ProtectedRoutes from "@/utils/ProtectedRoutes";

const Index = () => {
    return (
        <AuthForm>
            <FormHeader
                title={"Welcome back"}
                desc="Welcome back to WardLin Chat! Its great to see you again.
                Log in and take control of your chat."
            />
        </AuthForm>
    );
}

export default ProtectedRoutes(Index);