"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import type { Booking } from "@/app/lib/definitions";
import { getRoomName, showGuests, showNiceDates } from "@/app/lib/functions";
import { UpdateBooking } from "@/app/ui/buttons";
import { CancelBooking } from "@/app/ui/modal/cancel-booking";
import clsx from "clsx";

export function BookingTable({bookings}: {bookings: Booking[]}) {

  const bookingsSorted = bookings.reverse().sort((a, b) => new Date(b.travel_dates.end).getTime() - new Date(a.travel_dates.end).getTime());

  return (
    <div className="rounded-4xl bg-white p-3 border border-gray-50 shadow-xl shadow-gray-700/10 overflow-x-auto">
    <Table aria-label="Mina bokningar" color="secondary" removeWrapper className="min-w-[640px]">
      <TableHeader className="uppercase">
        <TableColumn>Resedatum</TableColumn>
        <TableColumn>Gäster</TableColumn>
        <TableColumn>Rum</TableColumn>
        <TableColumn>Meddelande</TableColumn>
        <TableColumn>Skapad</TableColumn>
        <TableColumn align="end">Ändra</TableColumn>
      </TableHeader>
      <TableBody>
        {bookingsSorted.map(booking => (
          <TableRow className={clsx(booking.is_canceled && "opacity-50")} key={booking.id}>
            <TableCell>{showNiceDates(booking.travel_dates)}</TableCell>
            <TableCell><Tooltip content={showGuests(booking.guests, booking.guests_children).divided}>{showGuests(booking.guests, booking.guests_children).total}</Tooltip></TableCell>
            <TableCell><Tooltip content={getRoomName(booking.rooms)}>{booking.rooms.length}</Tooltip></TableCell>
            <TableCell>{booking.message}</TableCell>
            <TableCell>{new Date(+booking.created_at).toLocaleDateString("sv-SE")}</TableCell>
            <TableCell>
              {!booking.is_canceled && 
                <div className="flex items-center justify-end gap-1 -mr-2">
                  <UpdateBooking id={booking.id} />
                  <CancelBooking booking={booking} />
                </div>
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}