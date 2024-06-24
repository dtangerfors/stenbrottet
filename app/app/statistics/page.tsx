import { fetchBookings } from '@/app/lib/data';
import { getDeviceType } from '@/app/lib/utils';
import FixedHeader from '@/app/ui/layout/mobile-header';
import { Tile } from './tile';
import { thisYear, previousYear } from './utils';
import { Section } from '@/app/ui/layout';
import { UserTable } from "./user-table";

export default async function StatisticsPage() {
  const { isMobile } = getDeviceType();
  const bookings = await fetchBookings();
  const currentYear = new Date().getFullYear();
  const lastYear = new Date().getFullYear() - 1;

  return (
    <>
      {isMobile && <FixedHeader label="Statistik" />}
      <section className="flex flex-col gap-6 p-3">
        <div className="w-full mx-auto grid max-w-screen-sm grid-cols-3 gap-2 rounded-4xl bg-white p-3 border border-gray-50 shadow-xl shadow-gray-700/10">
          <Tile number={bookings.length} text="Bokningar totalt" />
          <Tile
            number={bookings.filter(thisYear).length}
            text={`Bokningar ${currentYear}`}
          />
          <Tile
            number={bookings.filter(previousYear).length}
            text={`Bokningar ${lastYear}`}
          />
        </div>
        <div className="w-full mx-auto max-w-screen-sm rounded-4xl bg-white p-3 py-8 text-sm border border-gray-50 shadow-xl shadow-gray-700/10">
          <UserTable bookings={bookings} />
        </div>
      </section>
    </>
  );
}
