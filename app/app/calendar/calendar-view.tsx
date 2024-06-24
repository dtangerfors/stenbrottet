"use client"

import { useState, useEffect, useCallback } from "react";
import { useCalendarContext } from "@/app/app/calendar/context";
import { Booking, BookingEvent } from "@/app/lib/definitions";
import { Calendar, DateLocalizer, dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from 'date-fns';
import sv from "date-fns/locale/sv";

import "./calendar-styles.css";
import { useAppContext } from "@/app/app/app-context";

export function CalendarView({bookings, isMobile}: {bookings: Booking[], isMobile: RegExpMatchArray | null}) {
  const [events, setEvents] = useState<BookingEvent[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setCurrentMonth, setBookingsThisMonth } = useCalendarContext();
  const {onOpen, setSelectedDate} = useAppContext();

  useEffect(() => {
    const bookingsToState: BookingEvent[] = [];
    bookings.forEach((booking: Booking) => {
      bookingsToState.push({
        title: booking.name,
        start: new Date(parseInt(booking.arrival)),
        end: new Date(parseInt(booking.departure)),
        ...booking,
      })
    })

    setEvents(bookingsToState);
    setIsLoaded(true)

  }, [bookings])

  const eventStyleGetter = (
    event: BookingEvent,
  ) => {
    var style = {
      backgroundColor: event.user_color,
    };
    return {
      style: style,
    };
  };

  const formats = {
    weekdayFormat: "EEE",
  };

  const onDrillDown = useCallback((newDate: Date) => {
    setSelectedDate(newDate.toISOString().split('T')[0]);
    onOpen();
  }, [onOpen, setSelectedDate])

  return (
   isLoaded ?  <Calendar
    culture="sv"
    localizer={localizer}
    views={["month"]}
    messages={messages}
    events={events}
    formats={formats}
    onNavigate={onNavigate}
    eventPropGetter={eventStyleGetter}
    onDrillDown={onDrillDown}
  /> : <p>Laddar ...</p>
   
  )

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
    setBookingsThisMonth(bookings);
  }

}

const locales = {
  sv: sv
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
})

const messages = {
  allDay: "Hela dagen",
  previous: "Föregående",
  next: "Nästa",
  today: "Idag",
  month: "Månad",
  week: "Vecka",
  day: "Dag",
  agenda: "Agenda",
  date: "Datum",
  time: "Tid",
  event: "Händelse",
};

const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]