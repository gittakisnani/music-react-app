import axios from "../api/axios"
import { useAuth } from "../context/AuthContext"

const useRefreshToken = () => {
    const { setAuth } = useAuth()
    
    
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });

        setAuth && setAuth((prev: any) => {
            return {
                ...prev, 
                accessToken: response?.data?.accessToken,
                roles: response?.data?.roles 
            }
        })

        return response?.data?.accessToken
    }

    return refresh
}

export default useRefreshToken