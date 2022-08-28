import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const RequireSP = () => {
    const [token, setToken] = useState<string | undefined>();
    const REDIRECT_URL = 'https://gittakisnani.github.io/music-react-app/#/callback/'

    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RES_TYPE}&redirect_uri=${REDIRECT_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
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
        {token && token !== undefined
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