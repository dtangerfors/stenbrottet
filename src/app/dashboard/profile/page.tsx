import { fetchUserBookings, getUser } from '@/lib/data';
import { getDeviceType } from "@/lib/utils";
import { getUserProfileData } from "@/services/profile.service";
import FixedHeader from '@/components/dashboard/FixedHeader';
import Image from 'next/image';
import { BookingStatistics } from './booking-stats';
import { BookingTable } from "./booking-table"
import clsx from "clsx";
import { Main } from "@/components/dashboard/sections";

export default async function Profile() {
  const {isMobile} = getDeviceType(); 
  const user_data = await getUserProfileData();
  const user = await getUser(user_data.app_user_id);
  const bookings = await fetchUserBookings(user_data.app_user_id);

  return (
    <>
    {isMobile && <FixedHeader label={user.name} />}
      <div className={clsx("flex w-full flex-col", isMobile && "mt-14 pt-safe-top")}>
        <div className="flex flex-col items-center justify-center bg-primary p-6 max-lg:pb-16 lg:p-12 rounded-b-2xl lg:rounded-none">
          <><div className="mb-3">
              <figure className="relative h-32 w-32 overflow-hidden rounded-full border border-gray-100 bg-white">
                <Image
                  src={user_data.picture}
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
        <Main>
            <BookingTable bookings={bookings} />
        </Main>
      </div>
    </>
  );
}