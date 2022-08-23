import { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextInterface {
    auth?: AuthInterface
    setAuth?: (newAuth: AuthInterface | any) => void
    persist?: boolean
    setPersist?: (persist: boolean) => void
}

interface AuthInterface {
    username?: string
    pwd?: string
    accessToken?: string
    roles?: number[]
}

interface AuthProviderInterface {
    children: ReactNode
}

const AuthContext = createContext<AuthContextInterface>({})

export const AuthProvider = ({ children } : AuthProviderInterface) => {
    const [auth, setAuth] = useState<AuthInterface>({
        username: '',
        pwd: '',
        accessToken: '',
        roles: []
    });

    const [persist, setPersist] = useState<boolean>(JSON.parse(localStorage.getItem('persist')!) || false);
    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext