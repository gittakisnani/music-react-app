import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'
const LoginRegister = () => {
    const { auth } = useAuth();
    const navigate = useNavigate()
    const logout = useLogout()

    const handleLogout = async () => {
        await logout();
        navigate('/login')
    }
  return (
    <div className='flex items-center gap-2'>
       {!auth?.accessToken && 
            <Link to={'/login'}>
            <button className='bg-[#363739]/80 text-white py-1 px-2 duration-300 ease-linear hover:bg-[#363739] '>
                Login
            </button>
            </Link>
        }
        {!auth?.accessToken && 
            <Link to={'/register'}>
                <button className='bg-[#363739]/80 text-white py-1 px-2 duration-300 ease-linear hover:bg-[#363739] '>
                    Register
                </button>
            </Link>
        }
        {auth?.accessToken && 
            <button onClick={handleLogout} className='bg-[#363739]/80 text-white py-1 px-2 duration-300 ease-linear hover:bg-[#363739] '>
            Log out
            </button>
        }
    </div>
  )
}

export default LoginRegister