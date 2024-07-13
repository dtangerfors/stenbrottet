"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import type { Booking } from "@/app/lib/definitions";
import { getRoomName, showGuests, showNiceDates } from "@/app/lib/functions";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

export function BookingTable({bookings}: {bookings: Booking[]}) {

  const bookingsSorted = bookings.reverse().sort((a, b) => new Date(b.travel_dates.end).getTime() - new Date(a.travel_dates.end).getTime());

  return (
    <Table aria-label="Mina bokningar" color="secondary">
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
          <TableRow key={booking.id}>
            <TableCell>{showNiceDates(booking.travel_dates)}</TableCell>
            <TableCell><Tooltip content={showGuests(booking.guests, booking.guestsChildren).divided}>{showGuests(booking.guests, booking.guestsChildren).total}</Tooltip></TableCell>
            <TableCell><Tooltip content={getRoomName(booking.rooms)}>{booking.rooms.length}</Tooltip></TableCell>
            <TableCell>{booking.message}</TableCell>
            <TableCell>{new Date(+booking.created_at).toLocaleDateString("sv-SE")}</TableCell>
            <TableCell>
              <div>
                <button className="p-1 text-gray-500 hover:text-gray-950">
                  <Tooltip content="Ändra bokning">
                    <PencilSquareIcon width={24}/>
                  </Tooltip>
                </button>
                <button className="p-1 text-warning-700 hover:text-warning-950">
                  <Tooltip content="Avboka">
                    <XCircleIcon width={24}/>
                  </Tooltip>
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}