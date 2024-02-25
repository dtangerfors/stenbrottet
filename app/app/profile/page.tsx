import { fetchUserBookings, getUser } from '@/app/lib/data';
import { getDeviceType } from "@/app/lib/utils";
import FixedHeader from '@/app/ui/layout/mobile-header';
import Image from 'next/image';
import { BookingStatistics } from './booking-stats';
import Card from '@/app/ui/booking_card';
import { TabbedBookings } from './tabbed-bookings';
import { Section } from '@/app/ui/layout';

export default async function Profile() {
  const user = await getUser("00e5ea9c-803e-4665-9a74-b84f3336bdf5");
  const bookings = await fetchUserBookings("00e5ea9c-803e-4665-9a74-b84f3336bdf5");
  const {isMobile} = getDeviceType(); 

  return (
    <>
    {isMobile && <FixedHeader label={user.name} />}
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center justify-center bg-primary p-6 max-lg:pb-16 lg:p-12 lg:rounded-4xl">
          <div className="mb-3">
            <figure className="relative h-32 w-32 overflow-hidden rounded-full border border-gray-100 bg-white">
              <Image
                src="/daniel-linkedin.jpg"
                alt="Bild"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
          <div>
            <h1 className="text-center font-serif text-3xl font-extrabold text-white">
              {user.name}
            </h1>
            <BookingStatistics bookings={bookings} />
          </div>
        </div>
        <Section pt="small">
          <div className="flex flex-col gap-2">
            <TabbedBookings bookings={bookings} />
          </div>
        </Section>
      </div>
    </>
  );
}
