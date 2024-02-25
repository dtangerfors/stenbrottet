export const showNiceDates = (arrivalStr: Date, departureStr: Date) => {
  let str = "Inget datum satt";

  const arrival = {
    weekday: arrivalStr.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: arrivalStr.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: arrivalStr.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: arrivalStr.toLocaleDateString("sv-SE", { day: "numeric" }),
  };
  const departure = {
    weekday: departureStr.toLocaleDateString("sv-SE", { weekday: "short" }),
    year: departureStr.toLocaleDateString("sv-SE", { year: "numeric" }),
    month: departureStr.toLocaleDateString("sv-SE", { month: "numeric" }),
    day: departureStr.toLocaleDateString("sv-SE", { day: "numeric" }),
  };

  if (arrival.year === departure.year) {
    str = `${arrival.day}/${arrival.month} – ${departure.day}/${departure.month} ${departure.year}`;
  } else {
    str = `${arrival.day}/${arrival.month} ${arrival.year} – ${departure.day}/${departure.month} ${departure.year}`;
  }

  return str;
};