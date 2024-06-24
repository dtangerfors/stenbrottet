import { Booking } from '@/app/lib/definitions';
import { showNiceDates } from '@/app/lib/functions';

export const SmallBookingCard = ({ booking }: { booking: Booking }) => {
  const arrival = new Date(parseInt(booking.arrival));
  const departure = new Date(parseInt(booking.departure));

  return (
    <div className="flex grow gap-1 rounded-2xl bg-white p-4 pl-0 border border-gray-50 shadow-xl shadow-gray-700/10 overflow-hidden">
      <div
        style={{ backgroundColor: booking.user_color }}
        className="w-1 rounded-r-md"
      ></div>
      <div className="flex grow flex-col rounded-sm rounded-r-lg px-2">
        <p className="font-sans font-semibold text-primary-900 dark:text-primary-100">
          {booking.name}
        </p>
        <p className="font-sans font-regular text-primary-900/80 dark:text-primary-100">
          {showNiceDates(arrival, departure)} • {booking.guests} gäster
        </p>
      </div>
    </div>
  );
};
