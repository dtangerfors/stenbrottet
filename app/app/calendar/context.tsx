"use client"

import { BookingEvent } from "@/app/lib/definitions";
import { createContext, useContext, useState } from "react"

type CalendarContext = {
  currentMonth: string;
  bookingsThisMonth: BookingEvent[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<string>>;
  setBookingsThisMonth: React.Dispatch<React.SetStateAction<BookingEvent[]>>,
}

const CalendarContext = createContext<CalendarContext>({} as CalendarContext);

export default function CalendarProvider({children}: {children: React.ReactNode}) {

  const date = new Date();
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
  const [currentMonth, setCurrentMonth] = useState(`${months[monthIndex]} ${year}`);
  const [bookingsThisMonth, setBookingsThisMonth] = useState<BookingEvent[]>([]);

  return (
    <CalendarContext.Provider value={{currentMonth, bookingsThisMonth, setCurrentMonth, setBookingsThisMonth}}>
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendarContext() {
  return useContext(CalendarContext)
}