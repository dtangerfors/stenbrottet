import { Booking } from '@/lib/definitions';
import { getRoomName, showGuests, showNiceDates } from '@/lib/functions';

export const BookingCard = ({ booking }: { booking: Booking }) => {

  return (
    <div className="grid grid-cols-[3.5rem_.25rem_1fr] gap-3">
       <div>
        <p className="text-xs font-sans font-regular text-primary-900/80 dark:text-primary-100">{showNiceDates(booking.travel_dates).arrival}</p>
        <p className="text-xs font-sans font-regular text-primary-900/50 dark:text-primary-100">{showNiceDates(booking.travel_dates).departure}</p>
      </div>
      <div
        style={{ backgroundColor: booking.user_color }}
        className="w-1 rounded-md"
      ></div>
      <div className="flex grow flex-col">
        <p className="text-sm font-sans font-semibold text-primary-900 dark:text-primary-100">
          {booking.name}
        </p>
        <p className="text-sm font-sans font-regular text-primary-900/80 dark:text-primary-100">
          {showGuests(booking.guests, booking.guests_children).total} •  {getRoomName(booking.rooms)}
        </p>
        
        <p className="text-sm font-sans font-regular text-primary-900/80 dark:text-primary-100">
          {booking.message}
        </p>
      </div>
     
    </div>
  );
};
