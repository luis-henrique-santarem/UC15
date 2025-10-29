import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'



interface IUser{
    nome:string
}

interface IUserContext {
    user:IUser | null 
    setUsuario: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = createContext<IUserContext | undefined>(undefined)

export const useUser = ():IUserContext =>{
    const user = useContext(UserContext)

    if(!user){
        throw new Error("Deu erro mané")
    }

    return user
}

export const UserProvider = (props: {children:ReactNode}) => {
    const [user, setUsuario] = useState<IUser | null>(null)

    return (
        <UserContext.Provider value={{user,setUsuario}}>
            {props.children}
        </UserContext.Provider>
    )
}