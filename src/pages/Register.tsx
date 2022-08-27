import useWindowSize from "../hooks/useWindowSize"
import { useState } from "react"
import RegisterForm from "../components/Forms"
import { useDispatch } from "react-redux"
const SLIDES_IMAGES_SRC = [
    'https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1548502632-6b93092aad0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1567787609897-efa3625dd22d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
]

const Register = () => {
    document.title = 'Register'
    const { width } = useWindowSize();
    const [agree, setAgree] = useState(false)

  return (
    <div className="flex overflow-hidden h-screen w-screen">
        <h3 
        style={{backgroundColor: width! <= 768 ? '#181818' : ''}}
        className="text-2xl text-[#eef2f7]/80 fixed top-2 left-3 z-10">MusiCloud.com</h3>
        { width! > 991 && <div className="hidden p-4 bg-blue-600/80 md:flex justify-center items-center overflow-hidden w-[40%] relative">
            <div className="absolute -z-10 inset-0 overflow-hidden opacity-50">
                <img src={SLIDES_IMAGES_SRC[1]} alt='MusiCloud' className="h-full w-full block max-h-full max-w-full bg-cover"  />
            </div>
            <p className="text-white text-2xl text-center">Few clicks away from Listening to the latest musics</p>
        </div>}
        <RegisterForm agree={agree} setAgree={setAgree} />
    </div>
  )
}

export default Register