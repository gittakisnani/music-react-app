import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useRefreshToken from "../hooks/useRefreshToken";
import { useState, useEffect } from 'react'
import Loader from "./Loader";


const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth, persist, setAuth } = useAuth()
    const refresh = useRefreshToken()

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch(err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }

        }
        //Added Persist to test
        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)
    }, [])

  return (
    <>
        {!persist
            ? <Outlet />
            : isLoading 
            ? <Loader />
            : <Outlet />
        }
    </>
  )
}

export default PersistLogin