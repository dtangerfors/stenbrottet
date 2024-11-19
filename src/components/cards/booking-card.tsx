import { Booking } from '@/lib/definitions';
import { getRoomName, showGuests, showNiceDates } from '@/lib/functions';
import clsx from "clsx";

export const BookingCard = ({ booking }: { booking: Booking }) => {

  return (
    <div className="grid grid-cols-[3.5rem_.25rem_1fr] gap-3">
       <div>
        <p className="text-xs font-sans font-regular text-foreground">{showNiceDates(booking.travel_dates).arrival}</p>
        <p className="text-xs font-sans font-regular text-foreground-1">{showNiceDates(booking.travel_dates).departure}</p>
      </div>
      <div
        className={clsx("w-1 rounded-md", `bg-${booking.user_color}`)}
      ></div>
      <div className="flex grow flex-col">
        <p className="text-sm font-sans font-semibold text-foreground">
          {booking.name}
        </p>
        <p className="text-sm font-sans font-regular text-foreground">
          {showGuests(booking.guests, booking.guests_children).total} • {getRoomName(booking.rooms)}
        </p>
        
        <p className="text-sm font-sans font-regular text-foreground-1">
          {booking.message}
        </p>
      </div>
     
    </div>
  );
};
