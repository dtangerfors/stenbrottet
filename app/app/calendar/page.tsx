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
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 w-full grow max-laptop:bg-white">
        <div className={clsx("relative bg-primary lg:col-span-2 lg:bg-white transition-all lg:rounded-4xl", isMobile ? "p-0" : "p-4 lg:p-6 lg:pb-6")}>
          <CalendarView bookings={bookings} isMobile={isMobile} />
        </div>

        <div className={clsx("relative grow flex bg-white p-6 dark:bg-gray-950 transition-all  lg:rounded-4xl", isMobile && "pb-24")}>
          <BookingsInView />
        </div>
      </div>
    </CalendarProvider>
  )
}