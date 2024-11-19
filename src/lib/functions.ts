import { Booking, ColorType } from "./definitions";
import { rooms } from "@/components/forms/form-options";

export const showNiceDates = (travel_dates: Booking["travel_dates"]) => {
  let str = "Inget datum satt";
  const start = new Date(travel_dates.start);
  const end = new Date(travel_dates.end);

  const arrival = {
    weekday: start.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: start.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: start.toLocaleDateString("sv-SE", { month: "numeric" }),
    monthLong: start.toLocaleDateString("sv-SE", { month: "short" }),
    day: start.toLocaleDateString("sv-SE", { day: "numeric" }),
  };
  const departure = {
    weekday: end.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: end.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: end.toLocaleDateString("sv-SE", { month: "numeric" }),
    monthLong: end.toLocaleDateString("sv-SE", { month: "short" }),
    day: end.toLocaleDateString("sv-SE", { day: "numeric" }),
  };

  if (arrival.year === departure.year) {
    str = `${arrival.day}/${arrival.month} – ${departure.day}/${departure.month} ${departure.year}`;
  } else {
    str = `${arrival.day}/${arrival.month} ${arrival.year} – ${departure.day}/${departure.month} ${departure.year}`;
  }

  return {
    withYear: str,
    withoutYear: `${arrival.day} ${arrival.monthLong} - ${departure.day} ${departure.monthLong}`,
    arrival: `${arrival.day} ${arrival.monthLong}`,
    departure: `${departure.day} ${departure.monthLong}`,
  };
};

export const showGuests = (guests: number, guests_children: number = 0) => {
  function totalGuests() {
    let word = "gäster";
    const totalGuests = guests + guests_children;
    if (totalGuests <= 1) word = "gäst";
    return `${totalGuests} ${word}`;
  }

  function dividedGuests() {
    let adultPrashing = "vuxna";
    if (guests <= 1) adultPrashing = "vuxen";
    if (guests_children > 0) {
      return `${guests} ${adultPrashing}, ${guests_children} barn`
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

export function getRawColor(color: ColorType) {

  if (color === "coral") return "#f99585";
  if (color === "sky") return "#86b6f9";
  if (color === "sun") return "#f9ee85";
}