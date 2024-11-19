import { Booking, SortedBooking } from '@/lib/definitions';
import { Transition, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { showNiceDates } from "@/lib/functions";

export function UserTableRow({ bookings }: { bookings: Booking[] }) {
  const [bookingsByYear, setBookingsByYear] = useState<SortedBooking>({});
  const totalBookings = bookings.length;
  const currentYear = new Date().getFullYear();
  const lastYear = new Date().getFullYear() - 1;

  useEffect(() => {
    setBookingsByYear(sortBookingsByYear(bookings));
  }, [bookings]);

  return (
    <Disclosure as="div">
      <div className="flex h-9 w-full items-center overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-900 text-right font-medium leading-none text-secondary-700 dark:text-secondary-300">
        <span className="w-1/3 truncate px-4 text-left leading-9">
          {bookings[0].name}
        </span>
        <span className="flex-1 px-4">
          {bookingsByYear[currentYear] ? bookingsByYear[currentYear].length : 0}
        </span>
        <span className="flex-1 px-4">
          {bookingsByYear[lastYear] ? bookingsByYear[lastYear].length : 0}
        </span>
        <span className="flex-1 px-4">{totalBookings}</span>
        <DisclosureButton className="grid size-9 place-items-center hover:bg-secondary/20 dark:hover:bg-white/20">
          <ChevronDownIcon className="w-4" />
        </DisclosureButton>
      </div>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <DisclosurePanel>
          {Object.values(bookingsByYear).reverse().map((bookings) => <RowsByYear data={bookings} key={`row-${bookings[0].id}`} />)}
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );

  function sortBookingsByYear(bookings: Booking[]) {
    const groupedBookings: SortedBooking = {};

    bookings.forEach((booking) => {
      const year = new Date(booking.travel_dates.start).getFullYear();

      if (!groupedBookings[year]) {
        groupedBookings[year] = [];
      }

      groupedBookings[year].push(booking);
    });

    return groupedBookings;
  }
}

function RowsByYear({data}: { data:  Booking[] }) {
  return (
    <div className="text-s col-span-full mb-8 w-full first:mt-4 last:mb-12">
      <div className="flex px-4 text-right font-bold text-foreground">
        <span className="w-1/3 text-left">
          {new Date(data[0].travel_dates.start).getFullYear()}
        </span>
        <span className="flex-1">Antal dagar</span>
        <span className="flex-1">Antal gäster</span>
      </div>
      {data.map((booking, i) => (
        <div
          key={`booking-${booking.user_id}-${i}`}
          className="dark:bg-black-700 mb-1 flex w-full rounded-lg bg-foreground-2 py-1.5 px-4 text-xs text-right text-foreground"
        >
          <span className="flex-1 text-left">
            {showNiceDates(booking.travel_dates).withYear}
          </span>
          <span className="flex-1">
            {totalDays(booking.travel_dates.start, booking.travel_dates.end)}
          </span>
          <span className="flex-1">{booking.guests}</span>
        </div>
      ))}
    </div>
  );
  function totalDays(arrival: string, departure: string) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(arrival).valueOf();
    const secondDate = new Date(departure).valueOf();
  
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }
}
