"use client"

import { createContext, useContext, useState } from "react"
import { useDisclosure } from "@nextui-org/react";

type AppContextProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default function AppProvider({children}: {children: React.ReactNode}) {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  return (
    <AppContext.Provider value={{isOpen, onOpen, onClose, onOpenChange}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}