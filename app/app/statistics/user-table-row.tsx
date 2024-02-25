import { Booking, SortedBooking } from '@/app/lib/definitions';
import { Transition, Disclosure } from '@headlessui/react';
import { thisYear, previousYear } from './utils';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { showNiceDates } from "@/app/lib/functions";

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
      <div className="flex h-8 w-full items-center overflow-hidden rounded-xl bg-secondary-100 text-right font-medium leading-none text-secondary-700 dark:bg-secondary dark:text-secondary-800">
        <span className="w-1/3 truncate px-4 text-left">
          {bookings[0].name}
        </span>
        <span className="flex-1 px-4">
          {bookingsByYear[currentYear] ? bookingsByYear[currentYear].length : 0}
        </span>
        <span className="flex-1 px-4">
          {bookingsByYear[lastYear] ? bookingsByYear[lastYear].length : 0}
        </span>
        <span className="flex-1 px-4">{totalBookings}</span>
        <Disclosure.Button className="grid h-8 w-8 place-items-center hover:bg-secondary/20 dark:hover:bg-white/20">
          <ChevronDownIcon className="w-4" />
        </Disclosure.Button>
      </div>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel>
          {Object.values(bookingsByYear).reverse().map((bookings, i) => <RowsByYear data={bookings} key={`row-${bookings[0]}`} />)}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );

  function sortBookingsByYear(bookings: Booking[]) {
    const groupedBookings: SortedBooking = {};

    bookings.forEach((booking) => {
      const year = new Date(parseInt(booking.arrival)).getFullYear();

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
      <div className="flex px-4 text-right font-bold dark:text-white">
        <span className="w-1/3 text-left">
          {new Date(parseInt(data[0].arrival)).getFullYear()}
        </span>
        <span className="flex-1">Antal dagar</span>
        <span className="flex-1">Antal gäster</span>
      </div>
      {data.map((booking, i) => (
        <div
          key={`booking-${booking.user_id}-${i}`}
          className="dark:bg-black-700 mb-1 flex w-full rounded-xl bg-gray-50 py-1.5 px-4 text-xs text-right text-black dark:text-white/70"
        >
          <span className="flex-1 text-left">
            {showNiceDates(new Date(parseInt(booking.arrival)), new Date(parseInt(booking.departure)))}
          </span>
          <span className="flex-1">
            {totalDays(booking.arrival, booking.departure)}
          </span>
          <span className="flex-1">{booking.guests}</span>
        </div>
      ))}
    </div>
  );
  function totalDays(arrival: string, departure: string) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(parseInt(arrival));
    const secondDate = new Date(parseInt(departure));
  
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }
}
