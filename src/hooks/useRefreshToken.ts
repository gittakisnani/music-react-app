import axios from "../api/axios"
import { useAuth } from "../context/AuthContext"

const useRefreshToken = () => {
    const { setAuth } = useAuth()
    
    
    const refresh = async () => {
        const response = await axios.get('refresh', {
            withCredentials: true
        });

        setAuth && setAuth((prev: any) => {
            console.log(JSON.stringify(prev));
            console.log(response?.data?.accessToken)
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