import { Booking } from '@/lib/definitions';
import { showGuests, showNiceDates } from '@/lib/functions';

export const SmallBookingCard = ({ booking }: { booking: Booking }) => {

  return (
    <div className="flex grow gap-1 rounded-lg p-4 border border-foreground-2">
      <div
        style={{ backgroundColor: booking.user_color }}
        className="w-0.5 rounded-md"
      ></div>
      <div className="flex grow flex-col rounded-sm rounded-r-lg px-2">
        <p className="text-sm font-semibold text-foreground">
          {booking.name}
        </p>
        <p className="text-sm font-regular text-foreground-1">
          {showNiceDates(booking.travel_dates).withYear} • {showGuests(booking.guests, booking.guests_children).total}
        </p>
      </div>
    </div>
  );
};
