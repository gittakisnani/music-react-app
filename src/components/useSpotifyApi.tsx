import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const RequireSP = () => {
    const [token, setToken] = useState<string | undefined>();
    const location = useLocation()
    const from = location?.pathname || '/'

    const REDIRECT_URI = `https://gittakisnani.github.io/music-react-app/#${from}`
    const CLIENT_ID = 'f70ea4f24b4547cba2eb2d08e9e21d2a'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RES_TYPE = 'token'
    
    const API_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RES_TYPE}`
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=f70ea4f24b4547cba2eb2d08e9e21d2a&response_type=token&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
    useEffect(() => {
        const hash = window.location.hash
        let token:any = localStorage.getItem('token')

        if(!token && hash) {
            token = hash.substring(1).split('&').find(item => item.startsWith('access_token'))?.split('=')[1];

            window.location.hash = ''
            localStorage.setItem('token', token)
        }

        setToken(token);

    }, [])


    return (
        <>
        {token 
        ? <Outlet />
        : (
            <div className='flex-1 bg-[#181818] text-[#eef2f7]/80 p-6 flex justify-center items-center'>
                <a href={AUTH_URL}>Use spotify api</a>
            </div>
        )
        }
        </>
    )
}

export default RequireSP