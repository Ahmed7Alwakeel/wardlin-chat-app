import AuthForm from "@/components/auth/AuthForm";
import FormHeader from "@/components/auth/FormHeader";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
const Index = () => {
    return (
        <AuthForm signup>
            <FormHeader
                title={"Join Us"}
                desc="Start your journey with WardLin Chat! Its great to see.
            Sign up in and enjoy with your family."
            />
        </AuthForm>
    );
}

export default ProtectedRoutes(Index);