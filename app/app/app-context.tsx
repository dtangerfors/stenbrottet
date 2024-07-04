"use client"

import { createContext, useContext, useState } from "react"
import { useDisclosure } from "@nextui-org/react";

type AppContextProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default function AppProvider({children}: {children: React.ReactNode}) {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const currentDate = new Date().toLocaleDateString();
  const [selectedDate, setSelectedDate] = useState<string>(currentDate);

  return (
    <AppContext.Provider value={{isOpen, onOpen, onClose, onOpenChange, selectedDate, setSelectedDate}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}