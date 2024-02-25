"use client"
import { useCalendarContext } from "./context"
import { BookedEvent } from "@/app/ui/calendar/booked-event";

export function BookingsInView() {

  const {bookingsThisMonth} = useCalendarContext();
  const noBookings = bookingsThisMonth.length === 0;

  return (
    noBookings ?  <p className="m-auto block font-medium text-black dark:text-white text-center">Inga bokningar denna månad</p>
    : <div className="flex flex-col gap-3 w-full">{bookingsThisMonth.map((booking) => <BookedEvent key={booking.id} booking={booking} />)}</div>
  )
}