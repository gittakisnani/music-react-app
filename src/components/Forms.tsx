import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { BiCopyright } from "react-icons/bi";
import { BsCheckLg, BsFacebook } from "react-icons/bs";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from '../api/axios'
import { useAuth } from "../context/AuthContext";
const REGISTER_URL = 'register'
const LOGIN_URL = 'auth'
const CLIENT_ID = 'f70ea4f24b4547cba2eb2d08e9e21d2a'
const REDIRECT_URI = 'http://localhost:3000/callback'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RES_TYPE = 'token'

const API_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RES_TYPE}`

export interface LocationState {
    from: {
        pathname: string
    }
}

type RegisterProps = {
    agree: boolean
    setAgree: (value:boolean) => void
}



const RegisterForm = ({ agree, setAgree }: RegisterProps) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const { setAuth } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        setErr(false)
        setErrMsg('')
        setSuccess(false)
    }, [password, username, email]);

    const handleRegister = async (e : React.SyntheticEvent) => {
        e.preventDefault();
        if(!agree) {
            setErr(true);
            setErrMsg('You must agree the Condition terms and privacy to continue...');
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, 
                JSON.stringify({ user: username, pwd: password }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            setSuccess(true)
            setAuth!({
                username: username,
                pwd: password,
                accessToken: response?.data?.accessToken ?? '',
                roles: response?.data?.roles ?? []
            })
            navigate('/login')
        } catch(error) {
            const err = error as AxiosError
            setSuccess(false)
            setErr(true)
            if(!err?.response) {
                setErrMsg('No Server Response, please try again!')
            } else if( err?.response?.status === 400 ) {
                setErrMsg('Both username and password are required')
            } else if ( err?.response?.status === 409 ) {
                setErrMsg('Username is already used!')
            } else {
                setErrMsg('Registration Failed.Try again.')
            }
        }
    }
  return (
    <div className="bg-[#181818] flex-1 text-[#eef2f7]/80 form p-6 md:p-14 pt-12 h-full overflow-y-scroll">
            <h3 className="mb-10 font-medium text-2xl">Register</h3>
            <p className="font-light">Register and discover the latest musics!</p>
            <div className="registration-wrapper flex flex-col gap-2 items-center my-4">
                {err && errMsg && 
                    <div className="p-2 bg-[#ff4040] w-full max-w-[400px]">
                        <p className="text-whites">{errMsg}</p>
                    </div>
                }
                {success && 
                    <div className="p-2 bg-[#2e8b57] w-full max-w-[400px]">
                        <p className="text-whites">Succeeded</p>
                    </div>
                }
                <div className="flex items-center gap-1 justify-between flex-row w-full max-w-[400px]">
                    <button className="bg-[#363739]/80 flex gap-1 max-w-fit items-center p-2 rounded-sm duration-300 ease-linear hover:bg-[#363739] text-sm md:text-base">
                        <span><FcGoogle /></span>
                        <p>Register With Google</p>
                    </button>
                    <button className="bg-[#363739]/80 flex gap-2 max-w-fit items-center p-2 rounded-sm duration-300 ease-linear hover:bg-[#363739] text-sm md:text-base">
                        <span><BsFacebook /></span>
                        <p>Register With Facebook</p>
                    </button>
                </div>
                <div className="w-full max-w-[400px] relative h-[1px] bg-[#eef2f7]/80 my-4">
                    <span className="absolute bg-[#181818] p-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full grid place-items-center">Or</span>
                </div>
                <form onSubmit={handleRegister} className="w-full max-w-[400px] flex flex-col gap-2">
                    <div className="flex items-center gap-2 bg-[#363739]/80 rounded-sm px-2 duration-300 ease-linear hover:bg-[#363739] border-b border-transparent focus-within:bg-[#363739] focus-within:border-[#eef2f7]/80">
                        <span className=""><FaUserAlt /></span>
                        <label htmlFor="username" className="absolute left-[20000px]">Username</label>
                        <input 
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            id="username"
                            autoComplete="off"
                            type="text" 
                            className="outline-none flex-1 p-3 placeholder:text-white"
                            placeholder="Username"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-[#363739]/80 rounded-sm px-2 duration-300 ease-linear hover:bg-[#363739] border-b border-transparent focus-within:bg-[#363739] focus-within:border-[#eef2f7]/80">
                        <span className=""><MdEmail /></span>
                        <label htmlFor="email" className="absolute left-[20000px]">Email</label>
                        <input 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            required 
                            className="outline-none flex-1 p-3 placeholder:text-white"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-[#363739]/80 rounded-sm px-2 duration-300 ease-linear hover:bg-[#363739] border-b border-transparent focus-within:bg-[#363739] focus-within:border-[#eef2f7]/80">
                        <span className=""><FaLock /></span>
                        <label htmlFor="pwd" className="absolute left-[20000px]">Username</label>
                        <input 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="pwd"
                            type="password" 
                            className="outline-none flex-1 p-3 placeholder:text-white"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex gap-2 py-2">
                        <span onClick={() => setAgree(!agree)} 
                        style={{backgroundColor: agree? '#363739' : ''}}
                        className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#363739] select-none cursor-pointer rounded-sm">
                            {agree && <BsCheckLg />}
                        </span>
                        <p className="text-sm">By Registering I agree the <span className="text-white cursor-pointer">Condition terms & Privacy</span></p>
                    </div>
                    <button className="w-full bg-[#363739]/80 duration-300 ease-linear hover:bg-[#363739] p-3 font-bold">Register</button>
                    <p className="login text-sm">Already have an account?<Link to='/login'> <span className="text-white font-semibold">Login</span></Link></p>
                </form>
            </div>
        <div className="flex items-center gap-2 text-sm mt-4"><BiCopyright /> All rights reserved by Taki Snani</div>
    </div>
  )
}



export const LoginForm = () => {
    const [userOrEmail, setUserOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const { auth, setAuth, setPersist, persist } = useAuth();

    const togglePersist = () => setPersist!(!persist)

    useEffect(() => {
        localStorage.setItem('persist', JSON.stringify(persist))
    }, [persist])


    const from = (location.state as LocationState)?.from?.pathname || '/';

    const handleLogin = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({ user: userOrEmail, pwd: password }), 
                { 
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            setSuccess(true)
            setErr(false)

            setAuth!({
                username: userOrEmail,
                pwd: password,
                accessToken: response?.data?.accessToken ?? '',
                roles: response?.data?.roles ?? []
            })
            navigate(from, { replace: true })
        } catch(error) {
            const err = error as AxiosError
            setErr(true)
            setSuccess(false)
            if(!err?.response) {
                setErrMsg('No server response')
            } else if (err?.response?.status === 400 ) {
                setErrMsg('All fields are required')
            } else if ( err?.response?.status === 401 && err?.response?.data === 'Wrong password' ) {
                setErrMsg('Password incorrect')
            } else if ( err?.response?.status === 401 && err?.response?.data === 'User not found' ) {
                setErrMsg('User not found')
            } else {
                setErrMsg('Login Failed')
            }
        }
    }

    return (
        <div className="bg-[#181818] flex-1 text-[#eef2f7]/80 form p-6 md:p-14 pt-12 h-full overflow-y-scroll md:overflow-hidden">
            <h3 className="mb-10 font-medium text-2xl">Login</h3>
            <p className="font-light">Login to your account and enjoy the latest musics!</p>
            <div className="login-wrapper flex flex-col gap-2 items-center my-10">
                {err && errMsg && 
                    <div className="p-2 bg-[#ff4040] w-full max-w-[400px]">
                        <p className="text-whites">{errMsg}</p>
                    </div>
                }
                {success && 
                    <div className="p-2 bg-[#2e8b57] w-full max-w-[400px]">
                        <p className="text-whites">Logged in</p>
                    </div>
                }
                <div className="flex items-center gap-1 justify-between flex-row w-full max-w-[400px]">
                    <button className="bg-[#363739]/80 flex gap-1 max-w-fit items-center p-2 rounded-sm duration-300 ease-linear hover:bg-[#363739] text-sm md:text-base">
                        <span><FcGoogle /></span>
                        <p>Login With Google</p>
                    </button>
                    <button className="bg-[#363739]/80 flex gap-2 max-w-fit items-center p-2 rounded-sm duration-300 ease-linear hover:bg-[#363739] text-sm md:text-base">
                        <span><BsFacebook /></span>
                        <p>Login With Facebook</p>
                    </button>
                </div>
                <div className="w-full max-w-[400px] relative h-[1px] bg-[#eef2f7]/80 my-4">
                    <span className="absolute bg-[#181818] p-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full grid place-items-center">Or</span>
                </div>
                <form onSubmit={handleLogin} className="w-full max-w-[400px] flex flex-col gap-2">
                    <div className="flex items-center gap-2 bg-[#363739]/80 rounded-sm px-2 duration-300 ease-linear hover:bg-[#363739] border-b border-transparent focus-within:bg-[#363739] focus-within:border-[#eef2f7]/80">
                        <span className=""><FaUserAlt /></span>
                        <label htmlFor="username" className="absolute left-[20000px]">Username Or Email</label>
                        <input 
                            value={userOrEmail}
                            onChange={e => setUserOrEmail(e.target.value)}
                            id="username"
                            autoComplete="off"
                            type="text" 
                            className="outline-none flex-1 p-3 placeholder:text-white"
                            placeholder="Username or email"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-[#363739]/80 rounded-sm px-2 duration-300 ease-linear hover:bg-[#363739] border-b border-transparent focus-within:bg-[#363739] focus-within:border-[#eef2f7]/80">
                        <span className=""><FaLock /></span>
                        <label htmlFor="pwd" className="absolute left-[20000px]">Username</label>
                        <input 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="pwd"
                            type="password" 
                            className="outline-none flex-1 p-3 placeholder:text-white"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between py-2">
                       <div className="flex items-center gap-2">
                            <span onClick={togglePersist} 
                            style={{backgroundColor: persist? '#363739' : ''}}
                            className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#363739] select-none cursor-pointer rounded-sm">
                                {persist && <BsCheckLg />}
                            </span>
                            <p className="text-sm">Remember me</p>
                       </div>
                       <Link to='/register'><p className="underline cursor-pointer text-sm">Forgot password?</p></Link>
                    </div>
                    <button className="w-full bg-[#363739]/80 duration-300 ease-linear hover:bg-[#363739] p-3 font-bold">Login</button>
                    <p className="login text-sm">Don't have an account yet?<Link to='/register'> <span className="text-white font-semibold">Register now</span></Link></p>
                <div className="flex items-center gap-2 text-sm mt-10"><BiCopyright /> All rights reserved by Taki Snani</div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm