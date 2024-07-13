import { Booking } from "./definitions";
import { rooms } from "../form/form-options";

export const showNiceDates = (travel_dates: Booking["travel_dates"]) => {
  let str = "Inget datum satt";
  const start = new Date(travel_dates.start);
  const end = new Date(travel_dates.end);

  const arrival = {
    weekday: start.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: start.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: start.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: start.toLocaleDateString("sv-SE", { day: "numeric" }),
  };
  const departure = {
    weekday: end.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: end.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: end.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: end.toLocaleDateString("sv-SE", { day: "numeric" }),
  };

  if (arrival.year === departure.year) {
    str = `${arrival.day}/${arrival.month} – ${departure.day}/${departure.month} ${departure.year}`;
  } else {
    str = `${arrival.day}/${arrival.month} ${arrival.year} – ${departure.day}/${departure.month} ${departure.year}`;
  }

  return str;
};

export const showGuests = (guests: number, guestsChildren: number = 0) => {
  function totalGuests() {
    let word = "gäster";
    const totalGuests = guests + guestsChildren;
    if (totalGuests <= 1) word = "gäst";
    return `${guests} ${word}`;
  }

  function dividedGuests() {
    let adultPrashing = "vuxna";
    if (guests <= 1) adultPrashing = "vuxen";
    if (guestsChildren > 0) {
      return `${guests} ${adultPrashing}, ${guestsChildren} barn`
    } else { return `${guests} ${adultPrashing}` }
  }

  return {
    total: totalGuests(),
    divided: dividedGuests()
  }
  
};

export const getRoomName = (bookedRooms: string[]) => {
  if (!bookedRooms) return "Inga rum valda";
  const roomArr: string[] = [];
  bookedRooms.forEach((bookedRoom) => {
    const room = rooms.find(room => room.id === bookedRoom);
    if (room) { roomArr.push(room.value)}
  });

  return roomArr.join(", ");
};