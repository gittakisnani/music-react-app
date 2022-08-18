import { useEffect } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
interface AllowedRoles {
    allowedRoles: number[]
}

const RequireAuth = ({ allowedRoles }: AllowedRoles) => {
    const { auth } = useAuth()
    const location = useLocation()


    useEffect(() => {
      console.log('New Auth: ', auth)
    }, [auth])
  return (
        auth?.roles?.find(role => allowedRoles.includes(role))
        ? <Outlet />
        : auth?.username
        ? <p className="text-black bg-white">Unauthorized</p>
        : <Navigate to='/login' state={{from: location}} replace />
  )
}

export default RequireAuth