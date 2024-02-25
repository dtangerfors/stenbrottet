"use client";

import { useState, useEffect } from "react";
import { useCalendarContext } from "@/app/app/calendar/context";
import { Booking, BookingEvent } from "@/app/lib/definitions";
import { BigCalendar } from "./calendar";

export default function BookingCalendar({ bookings }: { bookings: Booking[] }) {
  const [events, setEvents] = useState<BookingEvent[]>([]);
  const [bookingsInView, setBookingsInView] = useState<BookingEvent[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setCurrentMonth } = useCalendarContext();

  useEffect(() => {
    addBookingsToArray(setEvents);
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-3 lg:gap-6">
        <div className="relative bg-primary p-4 pb-12 lg:col-span-2 lg:bg-white lg:p-6 lg:pb-6">
          {isLoaded ? (
            <BigCalendar events={events} onNavigate={onNavigate} />
          ) : (
            <div className="relative grid h-[50rem] w-full place-items-center rounded-sm bg-white pb-8">
              {" "}
              Laddar ...
            </div>
          )}
        </div>
        
      </div>
    </>
  );

  function addBookingsToArray(callback: Function) {
    let eventsArr: BookingEvent[] = [];

    bookings.forEach((booking: Booking) => {
      eventsArr.push({
        title: booking.name,
        start: new Date(parseInt(booking.arrival)),
        end: new Date(parseInt(booking.departure)),
        ...booking,
      });
    });

    setIsLoaded(true);
    callback(eventsArr);
  }

  function onNavigate(newDate: Date) {
    const currentDateInView = new Date(newDate);
    const monthInView = currentDateInView.getMonth();
    const yearInView = currentDateInView.getFullYear();

    const bookings = events.filter((booking) => {
      const bookingArrivalYear = booking.start.getFullYear();
      const bookingDepartureYear = booking.end.getFullYear();
      const bookingArrivalMonth = booking.start.getMonth();
      const bookingDepartureMonth = booking.end.getMonth();

      return (
        (yearInView === bookingArrivalYear ||
          yearInView === bookingDepartureYear) &&
        (monthInView === bookingArrivalMonth ||
          monthInView === bookingDepartureMonth)
      );
    });

    setCurrentMonth(`${months[monthInView]} ${yearInView}`)
    setBookingsInView(bookings);
  }
}

const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]