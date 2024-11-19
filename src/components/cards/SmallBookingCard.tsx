import { Booking } from '@/lib/definitions';
import { showGuests, showNiceDates } from '@/lib/functions';
import clsx from "clsx";

export const SmallBookingCard = ({ booking }: { booking: Booking }) => {

  return (
    <div className="flex grow gap-1 rounded-lg p-4 border border-foreground-2">
      <div
        className={clsx("w-0.5 rounded-md", `bg-${booking.user_color}`)}
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
