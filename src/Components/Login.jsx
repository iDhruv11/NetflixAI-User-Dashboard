import { useRef, useState } from "react";
import { validateCred } from "../Utils/validateCred";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import logo from "../assets/Logo.png"
import { ErrorIcon } from "../Icons/ErrorIcon";
import { EyeClose } from "../Icons/EyeClose";
import { EyeOpen } from "../Icons/EyeOpen";

export const Login = ({setShowSpinner}) => {

    const [isMailFocused, setIsMailFocused] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [mailErrorPrompt, setMailErrorPrompt] = useState(false)
    const [passwordErrorPrompt, setPasswordErrorPrompt] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const email = useRef()
    const password = useRef()

    const handleLogIn = async () => {

        const [mailError, ,] = validateCred(email.current?.value);
        setMailErrorPrompt(mailError);

        if (mailError == null) {
            try {
                setShowSpinner(true)
                const logInResponse = await signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            }
            catch (error) {
                (error.code == 'auth/invalid-credential') ? setPasswordErrorPrompt('Invalid email or password') : null;
                setShowSpinner(false)
            }
        }
    }
    return (
        <div className="w-[450px] bg-[#1f1f119] backdrop-blur-[50px] rounded-[6px] text-white mx-auto py-12 px-2 mt-52">

            <div className="w-full text-center">
                <img
                    src={logo}
                    alt="netflix logo"
                    className="w-5/12 mx-auto"
                />
                <p className="text-xl mt-2 font-medium">Log In to your Netflix Account</p>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">

                <div className="w-9/12 relative">

                    <input
                        type="text"
                        name="mail"
                        id="mail"
                        ref={email}
                        className={`w-full bg-[#252424] bg-opacity-40 rounded-[3px] px-[15px] text-white font-medium text-base pt-5 pb-2 border-[1px] border-gray-500 
                                ${(mailErrorPrompt)
                                ? `border-[#f73e34]`
                                : ``
                            }`}
                        onFocus={
                            () => {
                                setIsMailFocused(true);
                                setMailErrorPrompt(null)
                            }
                        }
                        onBlur={
                            () => {
                                (email.current.value) ? null : setIsMailFocused(false);
                                const [mailError, ,] = validateCred(email.current?.value, null, null);
                                setMailErrorPrompt(mailError);
                            }
                        }
                    />
                    <p
                        className={`font-medium text-gray-300 absolute top-4 left-4 text-[17px] ${(isMailFocused) ? `top-[6px] text-sm` : ``} transition-all ease-in-out duration-150`}

                        onClick={
                            () => {
                                setIsMailFocused(true)
                                email.current.focus()
                            }
                        }
                    >Email</p>
                    {
                        (mailErrorPrompt) && (
                            <div className="flex items-center text-[#f73e34] gap-1 mt-2 font-medium" >
                                <ErrorIcon />
                                <p className="text-sm">{mailErrorPrompt}</p>
                            </div>
                        )
                    }
                </div>
                <div className="w-9/12 relative">
                    <input
                        type={ showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        ref={password}
                        className={`w-full bg-[#252424] bg-opacity-40 rounded-[3px] px-[15px] text-white font-medium text-base pt-5 pb-2 border-[1px] border-gray-500 
                                ${(passwordErrorPrompt)
                                ? `border-[#f73e34]`
                                : ``
                            }`}
                        onFocus={
                            () => {
                                setIsPasswordFocused(true);
                                setPasswordErrorPrompt(null)
                            }
                        }
                        onBlur={
                            () => {
                                (password.current.value) ? null : setIsPasswordFocused(false);
                                const [, passwordError,] = validateCred(null, password.current?.value, null);
                                setPasswordErrorPrompt(passwordError);
                            }
                        } />
                    <p
                        className={`font-medium text-gray-300 absolute top-4 left-4 text-[17px] transition-all ease-in-out duration-150
                                ${(isPasswordFocused)
                                ? `top-[6px] text-sm`
                                : ``
                            }`}

                        onClick={
                            () => {
                                setIsPasswordFocused(true)
                                password.current.focus()
                            }
                        }
                    >Password</p>
                    {
                        (passwordErrorPrompt) && (
                            <div className="flex items-center text-[#f73e34] gap-1 mt-2 font-medium" >
                                <ErrorIcon />
                                <p className="text-sm">{passwordErrorPrompt}</p>
                            </div>
                        )
                    }
                    {
                        (showPassword)
                        ? <div
                            className="hover:bg-neutral-800/60 hover:cursor-pointer absolute px-2 py-2 rounded-full top-3 right-2"
                            onClick={ () => setShowPassword(!showPassword)}
                        > <EyeOpen /> </div>
                        : <div
                            className="hover:bg-neutral-800/60 hover:cursor-pointer absolute px-2 py-2 rounded-full top-3 right-2"
                            onClick={ () => setShowPassword(!showPassword)}
                        > <EyeClose /> </div>
                    }
                </div>
                <button className="w-9/12 bg-[#e50914] hover:bg-[#e50914e0] text-lg font-bold py-2 rounded-[4px] mt-2 transition-colors duration-200 ease-linear"
                    onClick={handleLogIn} >
                    Sign In
                </button>
            </div>

            <h5 className="font-medium text-center text-[17px] cursor-pointer text-white hover:underline mt-4">Forgot Password?</h5>

            <h5 className="font-medium text-neutral-300 text-[17.3px] text-center mt-1">
                New to Netflix? &nbsp;
                <span
                    className="font-medium text-center text-white hover:underline cursor-pointer"
                    onClick={
                        () => {
                            setMailErrorPrompt(null);
                            setPasswordErrorPrompt(null);
                            password.current.value = "";
                            setIsPasswordFocused(false)
                        }
                    }
                >
                    Sign up now.
                </span>
            </h5>

        </div>
    )
}