import { Booking } from "@/lib/definitions";

export const BookingStatistics = ({bookings}: {bookings: Booking[]}) => {

  const thisYear = new Date().getFullYear();
  const totalBookings = getTotalBookings(bookings, thisYear);
  const totalGuests = getTotalGuests(bookings, thisYear);
  const totalDays = getTotalDays(bookings, thisYear);

  return (
    <>
      <div className="flex justify-center gap-4 py-3 ">
        <div className="flex flex-col w-16 text-center">
          <Title text={totalBookings} />
          <Subtitle text="Bokningar" />
        </div>
        <div className="flex flex-col w-16 text-center">
          <Title text={totalDays} />
          <Subtitle text="Dagar" />
        </div>
        <div className="flex flex-col w-16 text-center">
          <Title text={totalGuests} />
          <Subtitle text="Gäster" />
        </div>
      </div>
      <p className="text-center font-sans text-xs font-medium text-white/40">
        Siffrorna ovan gäller för bokningar gjorda {thisYear}
      </p>
    </>
  );
};

function Title({text}: {text: number}) {
  return <span className="font-sans text-base font-semibold text-white">{text}</span>
}

function Subtitle({text}: {text: string}) {
  return <span className="font-sans text-xs font-medium text-white">{text}</span>
}

function getTotalBookings(bookings: Booking[], thisYear: number) {

  const bookingsThisYear = bookings.filter(booking => {
    const bookingYear = new Date(booking.travel_dates.end).getFullYear();
    return bookingYear === thisYear;
  });

  return bookingsThisYear.length
}


function getTotalGuests(bookings: Booking[], thisYear: number) {
  let totalGuests = 0;

  const bookingsThisYear = bookings.filter(booking => {
    const bookingYear = new Date(booking.travel_dates.end).getFullYear();
    return bookingYear === thisYear;
  });

  bookingsThisYear.forEach(booking => {
    totalGuests += booking.guests;
  })

  return totalGuests
}

function getTotalDays(bookings: Booking[], thisYear: number) {
  let totalDays = 0;

  const bookingsThisYear = bookings.filter(booking => {
    const bookingYear = new Date(booking.travel_dates.end).getFullYear();
    return bookingYear === thisYear;
  });

  bookingsThisYear.forEach(booking => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(booking.travel_dates.start).getTime();
    const secondDate = new Date(booking.travel_dates.end).getTime();

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    totalDays += diffDays
  })

  return totalDays
}