'use client';

import { Booking, SortedBooking } from '@/app/lib/definitions';
import Card from '@/app/ui/booking_card';
import { Tab } from '@headlessui/react';

export const TabbedBookings = ({ bookings }: { bookings: Booking[] }) => {
  const bookingsByYear = sortBookingsByYear(bookings);

  return (
    <div className="flex flex-col gap-6">
      <Tab.Group>
        <Tab.List className="relative flex gap-1 rounded-4xl bg-white p-1.5 max-w-lg mx-auto w-full">
          {bookingsByYear.map((bookingYear, i) => {
            return (
              <Tab
                key={`tab-${bookingYear}`}
                className="grow rounded-2xl py-1 text-base font-semibold text-secondary ui-selected:bg-secondary ui-selected:text-white"
              >
                {bookingYear.year}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels>
          {bookingsByYear.map((bookingYear, i) => {
            return (
              <Tab.Panel
                key={`tab-panel-${bookingYear.year}`}
                className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-3"
              >
                {bookingYear.booking.sort((a, b) => parseInt(b.departure) - parseInt(a.departure)).map((booking, i) => (
                  <Card key={`booking-${bookingYear}-${i}`} booking={booking} />
                ))}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

function sortBookingsByYear(bookings: Booking[]) {
  const groupedBookings: SortedBooking = {};

  bookings.forEach((booking) => {
    const year = new Date(parseInt(booking.arrival)).getFullYear();

    if (!groupedBookings[year]) {
      groupedBookings[year] = [];
    }

    groupedBookings[year].push(booking);
  });

  const groupedBookingsAsArray = Object.keys(groupedBookings).map((year) => {
    const convertedYear = parseInt(year);

    return {
      year: convertedYear,
      booking: groupedBookings[convertedYear],
    };
  });

  const sortedBookings = groupedBookingsAsArray.sort((a, b) => b.year - a.year);

  return sortedBookings;
}
