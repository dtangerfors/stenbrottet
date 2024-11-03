import { fetchUserBookings } from '@/lib/data';
import { getDeviceType } from "@/lib/utils";
import { getUserProfileData } from "@/services/profile.service";
import FixedHeader from '@/components/dashboard/FixedHeader';
// import Image from 'next/image';
import { BookingStatistics } from './booking-stats';
import { Section } from '@/components/dashboard/sections';
import { BookingTable } from "./booking-table"
import clsx from "clsx";

export default async function Profile() {
  const {isMobile} = getDeviceType(); 
  const user = await getUserProfileData();
  const bookings = await fetchUserBookings("8b564bfd-869e-4876-864c-2d2b1ea95d6c");

  console.table(user)

  return (
    <>
    {isMobile && <FixedHeader label={user.name} />}
      <div className={clsx("flex w-full flex-col", isMobile && "mt-14")}>
        <div className="flex flex-col items-center justify-center bg-primary p-6 max-lg:pb-16 lg:p-12">
          <><div className="mb-3">
              <figure className="relative h-32 w-32 overflow-hidden rounded-full border border-gray-100 bg-white">
                <img
                  src={user.picture}
                  alt="Bild"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover" />
              </figure>
            </div><div>
                <h1 className="text-center font-serif text-3xl font-extrabold text-white">
                  {user.name}
                </h1>
                <BookingStatistics bookings={bookings} />
              </div></>
          
        </div>
          <div className="flex flex-col gap-2 lg:p-6 overflow-hidden">
            <BookingTable bookings={bookings} />
          </div>
      </div>
    </>
  );
}