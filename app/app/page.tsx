import Image from 'next/image';
import Weather from '../ui/weather';
import { getDeviceType } from '@/app/lib/utils';
import FixedHeader from '@/app/ui/layout/mobile-header';
import clsx from 'clsx';
import { fetchBookings, fetchPosts } from '../lib/data';
import { InfoPosts } from '../ui/posts/info-posts';
import { PostsLoading } from '../ui/posts/posts-loading';
import { Suspense } from 'react';
import { SmallBookingCard } from '../ui/booking-card-small';
import { Section } from '../ui/layout';

export default async function Home() {
  const { isMobile } = getDeviceType();
  const posts = await fetchPosts();
  const bookings = await fetchBookings();

  return (
    <>
      {isMobile && <FixedHeader label="Hem" invisibleFromStart />}
      <div
        className={clsx('flex w-full flex-col lg:gap-12')}
      >
        <div className="relative grid h-96 place-items-center overflow-hidden p-6 lg:rounded-3xl">
          <figure className="absolute inset-0 h-full w-full">
            <Image
              src="/digerhuvud-desktop.jpg"
              alt="Ett grönt fält med blåeld"
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 h-full w-full bg-black/30"></div>
          </figure>
          <div className="relative flex flex-col items-center">
            <h1 className="mb-6 font-serif text-3xl font-semibold text-white lg:text-6xl">
              Stenbrottsvägen
            </h1>
            <Weather lon="19.039444" lat="57.855" />
          </div>
        </div>
        <Section>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-primary max-lg:text-center lg:text-4xl">
              Senaste bokningar
            </h2>
            <div className="@container">
              <div className="flex flex-col gap-3 @3xl:flex-row">
                {bookings
                  .reverse()
                  .slice(0, 3)
                  .map((booking, i) => (
                    <SmallBookingCard
                    key={`latest-bookings-${i}`}
                    booking={booking}
                    />
                  ))}
              </div>
            </div>
        </Section>
        <Section bgColor="max-lg:bg-gray-50">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-primary max-lg:text-center lg:text-4xl">
              Information
            </h2>
            <Suspense fallback={<PostsLoading />}>
              <InfoPosts data={posts} />
            </Suspense>
        </Section>
      </div>
    </>
  );
}
