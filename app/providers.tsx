"use client"

import {NextUIProvider} from "@nextui-org/react"
import UserProvider from "./context/user-context"

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </UserProvider>
  )
}

