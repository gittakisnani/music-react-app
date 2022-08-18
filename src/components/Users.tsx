import { useEffect, useState  } from 'react'
import { AxiosError } from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Users = () => {
    const [users, setUsers] = useState<any>();
    const location = useLocation();
    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();


        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('employees', {
                    signal: controller.signal
                })
    
                console.log(response?.data)
                isMounted && setUsers(response?.data)

            } catch(error) {
                const err = error as AxiosError;
                console.error(err)

                navigate('/login', { state: { from: location }, replace: true })
            }
        }

        getUsers()

        return () => {
            isMounted = false;
            controller.abort()
        }
        
    }, [])



  return (
    <div className='flex-1 bg-black text-white'>
        { users?.length
        ?   (
            <ul className='flex flex-col gap-2'>
                {users.map((user: any, index: number) => (<li key={index}>{user.firstname} {user.lastname}</li>))}
            </ul> 
        ) : <p>No users to display</p>
        }
    </div>
  )
}

export default Users