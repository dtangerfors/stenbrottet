import { fetchBookings } from '@/app/lib/data';
import { getDeviceType } from '@/app/lib/utils';
import FixedHeader from '@/app/ui/layout/mobile-header';
import { Tile } from './tile';
import { thisYear, previousYear, getTotalGuestsThisYear, getTotalDaysThisYear } from './utils';
import { Section } from '@/app/ui/layout';
import { UserTable } from "./user-table";
import { CalendarDaysIcon, DocumentDuplicateIcon, TicketIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { BookingChart } from "./booking-chart";
import clsx from "clsx";

export default async function StatisticsPage() {
  const { isMobile } = getDeviceType();
  const bookings = await fetchBookings();
  const currentYear = new Date().getFullYear();
  const lastYear = new Date().getFullYear() - 1;

  return (
    <>
      {isMobile && <FixedHeader label="Statistik" />}
      <section className="@container grid grid-cols-2 gap-6 max-lg:px-3 max-lg:py-6 pb-20 last:pb-24">
        <div className={clsx(isMobile ? "flex gap-3 col-span-2 whitespace-nowrap overflow-auto snap-x snap-mandatory -mx-3 px-3 pb-10 -mb-10 scrollbar-hide" : "grid @2xl:grid-cols-2 @3xl:grid-cols-4 gap-6 col-span-2")}>
          <Tile 
            number={bookings.filter(thisYear).length} 
            text={`Bokningar ${currentYear}`} 
            icon={<TicketIcon />} 
          />
          <Tile
            number={getTotalGuestsThisYear(bookings)}
            text={`Gäster ${currentYear}`}
            icon={<UserGroupIcon />}
          />
          <Tile
            number={getTotalDaysThisYear(bookings)}
            text={`Bokade dagar ${currentYear}`}
            icon={<CalendarDaysIcon />}
          />
          <Tile 
            number={bookings.length} 
            text={`Bokningar totalt`} 
            icon={<DocumentDuplicateIcon />} 
          />
        </div>
        <div className="col-span-full @2xl:col-span-1">
          <BookingChart bookings={bookings} />
        </div>
        <div className="col-span-full @2xl:col-span-1">
          <UserTable bookings={bookings} />
        </div>
      </section>
    </>
  );
}
