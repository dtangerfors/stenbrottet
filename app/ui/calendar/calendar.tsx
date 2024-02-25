import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import sv from "date-fns/locale/sv"

import "./styles.css";
import { BookingEvent } from "@/app/lib/definitions"

const locales = {
  sv: sv
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
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

export const BigCalendar = ({events, onNavigate}: {events: BookingEvent[], onNavigate: (newDate: Date) => void}) => {
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

  return (
    <Calendar
      culture="sv"
      localizer={localizer}
      views={["month"]}
      messages={messages}
      events={events}
      onNavigate={onNavigate}
      eventPropGetter={eventStyleGetter}
      style={{ height: isMobile ? 275 : "auto" }}
    />
  )
}