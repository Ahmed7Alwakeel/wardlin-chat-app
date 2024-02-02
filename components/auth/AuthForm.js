
import { useRouter } from "next/router"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logUserIn } from '@/store/redux/loginState';

const AuthForm = ({ children, signup }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const validationSchema = Yup.object({
        username: signup && Yup.string().required(`Required`),
        email: Yup.string()
            .email(`Invalid email format`)
            .required(`Required`)
            .matches(/^([a-zA-Z0-9_\-\.])/, `Invalid email format`),
        password: Yup.string()
            .required(`Required`)
            .min(6, `Password is too short - 6 chars minimum.`),
        confirmPassword: signup && Yup.string()
            .required(`Required`)
            .oneOf([Yup.ref("password"), null], `Passwords must match`),
    })

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    return (
        <>
            <div className='auth-section-container'>
                <div className='overlay'></div>
                <div className='form-container'>
                    {children}
                    <Formik
                        validateOnMount
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            dispatch(logUserIn(values))
                                .then(() => {
                                    if (localStorage?.getItem('chat')) {
                                        router.push('/chat')
                                        localStorage.removeItem('chat')
                                    } else {
                                        router.push("/")
                                    }
                                })
                        }}
                    >
                        {(formik) => (
                            <>
                                <Form>
                                    {signup &&
                                        <div className="field">
                                            <Field
                                                name={`username`}
                                                type={"text"}
                                                placeholder='User name'
                                            />
                                            <p className="error">
                                                <ErrorMessage name={`username`} />
                                            </p>
                                        </div>
                                    }
                                    <div className="field">
                                        <Field
                                            name={`email`}
                                            type={"text"}
                                            placeholder='Email'
                                        />
                                        <p className="error">
                                            <ErrorMessage name={`email`} />
                                        </p>
                                    </div>
                                    <div className="field">
                                        <Field
                                            name={`password`}
                                            type={"password"}
                                            placeholder='Password'
                                        />
                                        <p className="error">
                                            <ErrorMessage name={`password`} />
                                        </p>
                                    </div>
                                    {signup &&
                                        <div className="field">
                                            <Field
                                                name={`confirmPassword`}
                                                type={"password"}
                                                placeholder='Confirm Password'
                                            />
                                            <p className="error">
                                                <ErrorMessage name={`confirmPassword`} />
                                            </p>
                                        </div>
                                    }
                                    <button className='submit-button' type="submit">Submit</button>
                                </Form>
                            </>)}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default AuthForm