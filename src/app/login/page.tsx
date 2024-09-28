"use client"

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Cookies from 'js-cookie';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}

export default function LoginPage() {

  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()
  const pathName = usePathname()
  const router = useRouter()

  if (isLoggedIn) {
    router.push('/')
  }

  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle = mode === MODE.LOGIN ? "Login in"
    : mode === MODE.REGISTER ? "Register"
      : mode === MODE.RESET_PASSWORD ? "Reset Your Password"
        : 'Verify your email';

  const buttonTitle = mode === MODE.LOGIN ? "Login"
    : mode === MODE.REGISTER ? "Register"
      : mode === MODE.RESET_PASSWORD ? "Reset"
        : 'Verify';




  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")


    try {
      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({ email, password })
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({ email, password, profile: { nickname: username } })
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(email, pathName)
          setMessage('Password reset email sent. Please check your email.')
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({ verificationCode: emailCode })
          break;
        default:
          break;
      }


      switch (response?.loginState) {

        case LoginState.SUCCESS:
          setMessage('Login successful')
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken);

          Cookies.set('refreshToken', JSON.stringify(tokens.refreshToken), { expires: 2 })
          wixClient.auth.setTokens(tokens)
          router.push('/')

          break;

        case LoginState.FAILURE:
          if (response.errorCode === 'invalidEmail' || response.errorCode === 'invalidPassword') {
            setError('Invalid email or password')
          } else if (response.errorCode === 'emailAlreadyExists') {
            setError('Email already exists')
          } else if (response.errorCode === 'resetPassword') {
            setError('you need to reset your password')
          } else {
            setError('Something went wrong')
          }
          break;

        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION)
          setMessage('Please verify your email')
          break;
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage('your account is pending approval.')
          break;


        default:
          break;
      }

    } catch (err) {
      console.log(err)
      setError('something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const x = false
  return (
    <div>
      <div className=" w-full flex flex-col md:flex-row items-center h-[140vh] md:h-screen">
        <div className=" w-full h-3/5 md:w-1/2 relative md:h-full">
          <Image alt="" fill sizes="100%" className=" object-center object-cover" src={'https://images.pexels.com/photos/17084261/pexels-photo-17084261/free-photo-of-woman-in-jeans-and-black-sports-bra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
        </div>
        <div className=" w-full h-4/6 md:w-1/2 md:h-full flex py-6 bg-bitDarkSky justify-center items-center">
          <div className={` ${x && 'hidden'} container mx-auto flex items-center justify-center`}>
            <form onSubmit={handleSubmit} className=" w-full font-medium text-sm   h-full border-gray-800 p-6 flex flex-col gap-y-6 rounded-lg">
              <h1 className=" font-bold text-2xl">{formTitle}</h1>
              {
                mode === MODE.REGISTER &&
                <div className=" flex flex-col gap-y-3">
                  <label htmlFor="">Username</label>
                  <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="john" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
                </div>
              }
              {
                mode !== MODE.EMAIL_VERIFICATION ?
                  (<div className=" flex flex-col gap-y-3">
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="example@gmail.com" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
                  </div>) :
                  (<div className=" flex flex-col gap-y-3">
                    <label htmlFor="">Email Code</label>
                    <input onChange={(e) => setEmailCode(e.target.value)} type="text" name="emailCode" placeholder="code" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
                  </div>)
              }
              {
                (mode === MODE.REGISTER || mode === MODE.LOGIN) &&
                <div className=" flex flex-col gap-y-3">
                  <label htmlFor="">Password</label>
                  <input type="text" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="******" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
                </div>
              }

              {/* NAVIGATION */}
              {mode === MODE.LOGIN && (
                <div onClick={() => setMode(MODE.RESET_PASSWORD)} className=" text-right cursor-pointer text-gray-300 hover:text-white duration-150">Forget Password?</div>
              )}

              {/* SUBMIT BUTTON */}
              <button disabled={isLoading} type='submit' className={` disabled:opacity-70 disabled:hover:bg-sky-600 mt-4 py-3 px-8 hover:bg-sky-500 shadow-lg rounded-md bg-sky-600 text-white`} >
                {isLoading ? 'loading...' : buttonTitle}
              </button>

              {/* AFTER SUBMIT BUTTON CONTENT */}
              {error && <div className=" h-10 w-full bg-red-300 rounded-md flex justify-center items-center text-red-700">{error}</div>}
              {mode === MODE.LOGIN && (
                <div onClick={() => setMode(MODE.REGISTER)} className=" cursor-pointer text-center text-gray-300 hover:text-white duration-150">{"Don't"} have an account?</div>
              )}
              {mode === MODE.REGISTER && (
                <div onClick={() => setMode(MODE.LOGIN)} className=" cursor-pointer text-center text-gray-300 hover:text-white duration-150"> Have an account?</div>
              )}
              {mode === MODE.RESET_PASSWORD && (
                <div onClick={() => setMode(MODE.LOGIN)} className=" cursor-pointer text-center text-gray-300 hover:text-white duration-150"> Go back to login </div>
              )}

              {message && <div className="h-10 w-full bg-green-300 rounded-md flex justify-center items-center text-green-700">{message}</div>}
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
