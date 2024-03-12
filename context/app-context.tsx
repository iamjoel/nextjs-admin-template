'use client'
import type { ReactNode, FC } from 'react'
import { useState } from 'react'
import { createContext, useContext, useContextSelector } from 'use-context-selector'

type User = {
  name: string,
  email: string,
}
type AppContextValue = {
  user: User
  setUser: (user: User) => void
}

const AppContext = createContext<AppContextValue>({
  user: {
    name: '',
    email: '',
  },
  setUser: () => { },
})

type AppContextProviderProps = {
  children: ReactNode
}

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AppContextValue['user']>({
    name: 'John Doe',
    email: 'xx@gmail.com',
  })
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

export default AppContext
