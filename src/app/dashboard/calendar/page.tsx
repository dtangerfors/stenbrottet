import { Suspense } from "react";
import clsx from "clsx";
import { getDeviceType } from "@/lib/utils";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { fetchBookings } from "@/lib/data";
import CalendarProvider from "./context";
import { CalendarView } from "./calendar-view";
import { BookingsInView } from "./bookings-in-view";
import { BookingEventSkeleton, CalendarSkeleton } from "@/components/skeletons";

export default async function CalendarPage() {
  const {isMobile} = getDeviceType(); 
  const bookings = await fetchBookings();

  return (
    <CalendarProvider>
      <div className={clsx(isMobile && "flex flex-col h-full bg-gradient-to-b from-primary from-25% to-25% to-white")}>
        {isMobile && <FixedHeader />}
        <div className={clsx("@container", isMobile && "mt-14")}>
          <div className={clsx("flex flex-col @4xl:grid @4xl:grid-cols-3 w-full", !isMobile && "p-6 gap-6")}>
            <Suspense fallback={<CalendarSkeleton />}>
              <CalendarView bookings={bookings} isMobile={isMobile} />
            </Suspense>

            <div className={clsx("@container relative grow", isMobile && "pb-24 bg-white")}>
              <Suspense fallback={<BookingEventSkeleton />}>
                <BookingsInView />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </CalendarProvider>
  )
}