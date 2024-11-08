import { fetchBookings } from '@/lib/data';
import { getDeviceType } from '@/lib/utils';
import FixedHeader from '@/components/dashboard/FixedHeader';
import { Tile } from './tile';
import { thisYear, getTotalGuestsThisYear, getTotalDaysThisYear } from './utils';
import { Main, Hero } from '@/components/dashboard/sections';
import { UserTable } from "./user-table";
import { CalendarDaysIcon, DocumentDuplicateIcon, TicketIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { BookingChart } from "./booking-chart";
import clsx from "clsx";

export default async function StatisticsPage() {
  const { isMobile } = getDeviceType();
  const bookings = await fetchBookings();
  const currentYear = new Date().getFullYear();
  // const lastYear = new Date().getFullYear() - 1;

  return (
    <>
      {isMobile && <FixedHeader label="Statistik" invisibleFromStart/>}
      <Hero title="Statistik" />
      <Main>
      <section className="@container grid grid-cols-2 gap-2 md:gap-6">
        <div className={clsx("grid @2xl:grid-cols-2 @3xl:grid-cols-4 gap-3 @2xl:gap-6 col-span-2 bg-surface rounded-2xl @2xl:bg-transparent p-6 @2xl:p-0")}>
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
        <div className="col-span-full @4xl:col-span-1">
          <BookingChart bookings={bookings} />
        </div>
        <div className="col-span-full @4xl:col-span-1">
          <UserTable bookings={bookings} />
        </div>
      </section>
      </Main>
    </>
  );
}
