import { BookingEvent } from "@/app/lib/definitions"
import { getRoomName, showGuests, showNiceDates } from "@/app/lib/functions"
import { HomeIcon } from "@heroicons/react/16/solid"

export const BookedEvent = ({booking}: {booking: BookingEvent}) => {
  return (
    <div className="flex gap-1" title={`Klicka för att expandera ${booking.title}s bokning`}>
      <div style={{backgroundColor: booking.user_color}} className="w-1 rounded-sm"></div>
      <div style={{backgroundColor: `${booking.user_color}33`}} className="flex flex-col grow py-1 px-2 rounded-sm rounded-r-lg">
        <p className="font-sans font-semibold text-primary-900 dark:text-primary-100">{booking.title}</p>
        <p className="font-sans font-normal text-primary-900 dark:text-primary-100">{showNiceDates(booking.start, booking.end)} • {showGuests(booking.guests)} • {getRoomName(booking.rooms)}</p>
        <p className="font-sans font-normal text-primary-900 dark:text-primary-100">{booking.message}</p>
      </div>
    </div>
  )
}