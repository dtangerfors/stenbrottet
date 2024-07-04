import { Suspense } from "react";
import clsx from "clsx";
import { getDeviceType } from "@/app/lib/utils";
import FixedHeader from "@/app/ui/layout/mobile-header";
import { fetchBookings } from "@/app/lib/data";
import CalendarProvider from "./context";
import { CalendarView } from "./calendar-view";
import { BookingsInView } from "./bookings-in-view";
import { CalendarSkeleton } from "@/app/ui/skeletons";

export default async function Calendar() {
  const {isMobile} = getDeviceType(); 
  const bookings = await fetchBookings();

  return (
    <CalendarProvider>
      {isMobile && <FixedHeader />}
      <div className="@container">
        <div className="flex flex-col @4xl:grid @4xl:grid-cols-3 @4xl:gap-6 w-full grow bg-white lg:rounded-4xl lg:border lg:border-gray-50 lg:shadow-xl lg:shadow-gray-700/10">
          <Suspense fallback={<CalendarSkeleton />}>
            <div className={clsx("relative lg:col-span-2 transition-all", isMobile ? "p-0 bg-primary" : "p-6 @4xl:pr-0")}>
              <CalendarView bookings={bookings} isMobile={isMobile} />
            </div>
          </Suspense>

          <div className={clsx("@container relative grow flex max-laptop:bg-offwhite p-6 @4xl:pl-0 dark:bg-gray-950 transition-all", isMobile && "pb-24")}>
            <BookingsInView />
          </div>
        </div>
      </div>
    </CalendarProvider>
  )
}