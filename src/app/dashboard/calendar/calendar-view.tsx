"use client"

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useCalendarContext } from "@/app/dashboard/calendar/context";
import { Booking, BookingEvent } from "@/lib/definitions";
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from 'date-fns';
import {sv} from "date-fns/locale/sv";

import "./calendar-styles.css";
import { useAppContext } from "@/app/dashboard/app-context";
import clsx from "clsx";

export function CalendarView({bookings, isMobile}: {bookings: Booking[], isMobile: RegExpMatchArray | null}) {
  const router = useRouter();
  const [events, setEvents] = useState<BookingEvent[]>([]);
  const { setCurrentMonth, setBookingsThisMonth } = useCalendarContext();
  const { setSelectedDate } = useAppContext();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const bookingsToState: BookingEvent[] = [];
    bookings.forEach((booking: Booking) => {
      bookingsToState.push({
        title: booking.name,
        start: new Date(booking.travel_dates.start),
        end: new Date(booking.travel_dates.end),
        ...booking,
      })
    })

    setEvents(bookingsToState);

  }, [bookings])

  const eventStyleGetter = (
    event: BookingEvent,
  ) => {
    const style = {
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
    setSelectedDate(newDate.toLocaleDateString());
    router.push("/app/booking/create");
  }, [setSelectedDate, router])

  const onNavigate = useCallback((newDate: Date) => {
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

    setDate(currentDateInView)
    setCurrentMonth(`${months[monthInView]} ${yearInView}`)
    setBookingsThisMonth(bookings);
  }, [events, setBookingsThisMonth, setCurrentMonth])

  return (
    <div className={clsx("relative md:col-span-2 transition-all md:bg-white md:rounded-2xl md:dark:bg-gray-950", isMobile ? "p-0 bg-primary" : "p-6")}>
      <Calendar
        culture="sv"
        date={date}
        localizer={localizer}
        messages={messages}
        events={events}
        formats={formats}
        eventPropGetter={eventStyleGetter}
        onNavigate={onNavigate}
        onDrillDown={onDrillDown}
      />
   </div>
  )

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