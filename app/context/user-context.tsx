"use client"

import { createContext, useContext, useState } from "react"
import { User } from "../lib/definitions"

type UserContextProps = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export default function UserProvider({children}: {children: React.ReactNode}) {

  const [user, setUser] = useState<User | undefined>();

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}