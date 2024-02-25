const getRoomName = (rooms: any[]) => {
  if (!rooms) return "Inga rum valda";
  const roomArr: any[] = [];
  rooms.forEach((room) => {
    roomArr.push(room.name);
  });

  return roomArr.join(", ");
};

const showDate = (timeStr: string) => {
  let date = new Date(parseInt(timeStr));
  return date.toLocaleDateString("sv-SE");
};

const bookedDates = (arrivalStr: string, departureStr: string) => {
  const arrivalEvent = new Date(parseInt(arrivalStr));
  const departureEvent = new Date(parseInt(departureStr));
  let str = "Inget datum satt";

  const arrival = {
    weekday: arrivalEvent.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: arrivalEvent.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: arrivalEvent.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: arrivalEvent.toLocaleDateString("sv-SE", { day: "numeric" }),
  };
  const departure = {
    weekday: departureEvent.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: departureEvent.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: departureEvent.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: departureEvent.toLocaleDateString("sv-SE", { day: "numeric" }),
  };

  if (arrival.year === departure.year) {
    str = `${arrival.day}/${arrival.month} – ${departure.day}/${departure.month} ${departure.year}`;
  } else {
    str = `${arrival.day}/${arrival.month} ${arrival.year} – ${departure.day}/${departure.month} ${departure.year}`;
  }

  return str;
};

const showGuests = (guests: number) => {
  let word = "gäster";

  if (guests <= 1) word = "gäst";

  return `${guests} ${word}`;
};

export { getRoomName, showDate, showGuests, bookedDates };