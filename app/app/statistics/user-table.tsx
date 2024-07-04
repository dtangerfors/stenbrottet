'use client';
import { Booking } from '@/app/lib/definitions';
import { useEffect, useState } from 'react';
import { UserTableRow } from "./user-table-row";

type SortedBookings = {
  [user_id: string]: Booking[];
};

export function UserTable({bookings}: {bookings: Booking[]}) {
  const [bookingsByUser, setBookingsByUser] = useState<SortedBookings>({});
  const currentYear = new Date().getFullYear();
  const lastYear = new Date().getFullYear() - 1;

  useEffect(() => {
    setBookingsByUser(sortBookingsByUserId(bookings));
  }, [bookings]);

  return (
    <div className="w-full mx-auto max-w-screen-md rounded-4xl bg-white p-3 pb-8 text-sm border border-gray-50 shadow-xl shadow-gray-700/10">
      <div className="p-3">
        <span className="font-serif text-2xl font-medium leading-tight text-primary">Bokningar per användare</span>
      </div>
      <div className="flex px-4 text-right font-bold dark:text-white mb-2">
        <span className="w-1/3 text-left">Användare</span>
        <span className="flex-1">{currentYear}</span>
        <span className="flex-1">{lastYear}</span>
        <span className="flex-1">Totalt antal</span>
        <span className="w-14"></span>
      </div>
      <div className="flex flex-col gap-2">
        {Object.entries(bookingsByUser).map((bookings, i) => <UserTableRow key={`table-row-${i}`} bookings={bookings[1]} />)}
      </div>
    </div>
  );

  function sortBookingsByUserId(bookings: Booking[]): SortedBookings {
    const sortedBookings: SortedBookings = {};

    bookings.forEach((booking) => {
      const user_id = booking.user_id;

      if (!sortedBookings[user_id]) {
        sortedBookings[user_id] = [];
      }

      sortedBookings[user_id].push(booking);
    });

    return sortedBookings;
  }
}
