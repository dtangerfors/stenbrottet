import { Booking } from "@/app/lib/definitions";

function thisYear(booking: Booking) {
  const bookingCreated = new Date(parseInt(booking.arrival)).getFullYear();
  const thisYear = new Date().getFullYear();
  return bookingCreated == thisYear;
}

function previousYear(booking: Booking) {
  const bookingCreated = new Date(parseInt(booking.arrival)).getFullYear();
  const previousYear = new Date().getFullYear() - 1;
  return bookingCreated == previousYear;
}

export {thisYear, previousYear} 