"use client"

import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}

export default function LoginPage() {

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


  const wixClient = useWixClient()

  return (
    <div className=" h-[calc(100vh-80px)]  container mx-auto flex items-center justify-center">
      <form action="" className=" w-full max-w-md font-medium text-sm bg-bitDarkSky border-2 border-gray-800 p-6 flex flex-col gap-y-6 rounded-lg">
        <h1 className=" font-bold text-2xl">{formTitle}</h1>
        {
          mode === MODE.REGISTER &&
          <div className=" flex flex-col gap-y-3">
            <label htmlFor="">Username</label>
            <input type="text" name="username" placeholder="john" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
          </div>
        }
        {
          mode !== MODE.EMAIL_VERIFICATION ?
            (<div className=" flex flex-col gap-y-3">
              <label htmlFor="">Email</label>
              <input type="email" name="email" placeholder="example@gmail.com" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
            </div>) :
            (<div className=" flex flex-col gap-y-3">
              <label htmlFor="">Email Code</label>
              <input type="text" name="emailCode" placeholder="code" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
            </div>)
        }
        {
          (mode === MODE.REGISTER || mode === MODE.LOGIN) &&
          <div className=" flex flex-col gap-y-3">
            <label htmlFor="">Password</label>
            <input type="text" name="password" placeholder="******" className=' rounded-lg bg-darkSky py-3 px-5 border-2 border-gray-700' />
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
        {error && <div className=" text-red-500">{error}</div>}
        {mode === MODE.LOGIN && (
          <div onClick={() => setMode(MODE.REGISTER)} className=" cursor-pointer text-center text-gray-300 hover:text-white duration-150">{"Don't"} have an account?</div>
        )}
        {mode === MODE.REGISTER && (
          <div onClick={() => setMode(MODE.LOGIN)} className=" cursor-pointer text-center text-gray-300 hover:text-white duration-150"> Have an account?</div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div onClick={() => setMode(MODE.LOGIN)} className=" cursor-pointer text-center text-gray-300 hover:text-white duration-150"> Go back to login </div>
        )}
       
        {message && <div className=" text-green-600">{message}</div>}
      </form>
    </div>
  )
}
