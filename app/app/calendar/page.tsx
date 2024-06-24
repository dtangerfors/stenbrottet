import clsx from "clsx";
import { getDeviceType } from "@/app/lib/utils";
import FixedHeader from "@/app/ui/layout/mobile-header";
import { fetchBookings } from "@/app/lib/data";
import CalendarProvider from "./context";
import { CalendarView } from "./calendar-view";
import { BookingsInView } from "./bookings-in-view";

export default async function Calendar() {
  const {isMobile} = getDeviceType(); 
  const bookings = await fetchBookings();

  return (
    <CalendarProvider>
      {isMobile && <FixedHeader />}
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 w-full grow bg-white lg:rounded-4xl lg:border lg:border-gray-50 lg:shadow-xl lg:shadow-gray-700/10">
        <div className={clsx("relative lg:col-span-2 transition-all", isMobile ? "p-0 bg-primary" : "p-4 lg:p-6 lg:pb-6")}>
          <CalendarView bookings={bookings} isMobile={isMobile} />
        </div>

        <div className={clsx("relative grow flex max-laptop:bg-offwhite p-6 dark:bg-gray-950 transition-all", isMobile && "pb-24")}>
          <BookingsInView />
        </div>
      </div>
    </CalendarProvider>
  )
}