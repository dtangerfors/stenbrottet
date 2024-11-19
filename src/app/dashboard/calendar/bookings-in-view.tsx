'use client';
import { BookingCard } from '@/components/cards';
import { useCalendarContext } from './context';

export function BookingsInView() {
  const { bookingsThisMonth } = useCalendarContext();
  const hasBookings = bookingsThisMonth.length !== 0;

  return (
    <div className="flex h-full w-full flex-col gap-8 rounded-2xl p-6 @lg:grid @lg:grid-cols-2 @3xl:grid-cols-3 md:bg-surface">
      {hasBookings &&
        bookingsThisMonth.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      {!hasBookings && (
        <p className="m-auto block text-center font-medium text-foreground">
          Inga bokningar denna månad
        </p>
      )}
    </div>
  );
}
