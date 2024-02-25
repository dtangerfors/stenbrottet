import { BookingEvent } from "@/app/lib/definitions"
import { showNiceDates } from "@/app/lib/functions"

export const BookedEvent = ({booking}: {booking: BookingEvent}) => {
  return (
    <div className="flex gap-1" title={`Klicka för att expandera ${booking.title}s bokning`}>
      <div style={{backgroundColor: booking.user_color}} className="w-1 rounded-sm"></div>
      <div style={{backgroundColor: `${booking.user_color}33`}} className="flex flex-col grow py-1 px-2 rounded-sm rounded-r-lg">
        <p className="font-sans font-semibold text-primary-900 dark:text-primary-100">{booking.title}</p>
        <p className="font-sans font-normal text-primary-900 dark:text-primary-100">{showNiceDates(booking.start, booking.end)}</p>
      </div>
    </div>
  )
}