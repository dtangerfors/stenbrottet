"use client";
import clsx from "clsx";
import {
  Tooltip,
} from "@nextui-org/react";
import type { Booking } from "@/lib/definitions";
import { getRoomName, showGuests, showNiceDates } from "@/lib/functions";
import { UpdateBooking } from "@/components/buttons";
import { CancelBooking } from "@/components/modal/cancel-booking";

const tableHeaderCell = clsx(
  "table-cell group px-3 h-10 align-middle bg-background whitespace-nowrap text-foreground-1 text-tiny font-semibold first:rounded-s-lg last:rounded-e-lg text-start"
);
const tableCell = clsx(
  "table-cell py-2 px-3 relative align-middle whitespace-normal text-foreground text-small font-normal",
  "before:content-[attr(data-before)] before:block before:hidden before:text-foreground-1 before:text-tiny before:font-semibold"
);

export function BookingTable({ bookings }: { bookings: Booking[] }) {
  const bookingsSorted = bookings
    .reverse()
    .sort(
      (a, b) =>
        new Date(b.travel_dates.end).getTime() -
        new Date(a.travel_dates.end).getTime()
    );

  return (
    <div className="rounded-2xl bg-surface p-3 overflow-x-scroll @container">
      <section className="min-w-[48rem] h-auto w-full table">
        <header className="table-header-group [&>tr]:first:rounded-lg">
          <span className={tableHeaderCell}>Resedatum</span>
          <span className={tableHeaderCell}>Gäster</span>
          <span className={tableHeaderCell}>Rum</span>
          <span className={tableHeaderCell}>Meddelande</span>
          <span className={tableHeaderCell}>Skapad</span>
          <span className={tableHeaderCell} style={{ textAlign: "right" }}>
            Ändra
          </span>
        </header>
        <ul className="table-row-group">
          {bookingsSorted.map((booking) => (
            <li key={booking.id} className="table-row border-b last:border-none pb-4 mb-4 border-foreground-2">
            <ul
              className={clsx("contents gap-4", booking.is_canceled && "opacity-50")}
              key={booking.id}
            >
              <li data-before="Resedatum" className={tableCell}>
                {showNiceDates(booking.travel_dates).withYear}
              </li>
              <li data-before="Gäster" className={tableCell}>
                <Tooltip
                  content={
                    showGuests(booking.guests, booking.guests_children).divided
                  }
                >
                  {showGuests(booking.guests, booking.guests_children).total}
                </Tooltip>
              </li>
              <li data-before="Rum" className={tableCell}>
                <Tooltip content={getRoomName(booking.rooms)}>
                  {booking.rooms.length}
                </Tooltip>
              </li>
              <li data-before="Meddelande" className={tableCell}>
                {booking.message}
              </li>
              <li data-before="Skapad" className={tableCell}>
                {new Date(+booking.created_at).toLocaleDateString("sv-SE")}
              </li>
              <li data-before="Ändra" className={tableCell}>
                {!booking.is_canceled && (
                  <div className="flex items-center justify-end gap-1 -mr-2">
                    <UpdateBooking id={booking.id} />
                    <CancelBooking booking={booking} />
                  </div>
                )}
              </li>
            </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
