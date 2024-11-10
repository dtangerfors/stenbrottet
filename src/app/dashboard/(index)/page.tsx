import clsx from "clsx";
import Image from "next/image";
import { getDeviceType } from "@/lib/utils";
import Weather from "@/components/weather";
import { fetchBookings, fetchPosts } from "@/lib/data";
import { getUserProfileData } from "@/services/profile.service";
import { Main, Section } from "@/components/dashboard/sections";
import { SmallBookingCard } from "@/components/cards";
import { PostsLoading } from "@/components/posts/posts-loading";
import { Suspense } from "react";
import { InfoPosts } from "@/components/posts/info-posts";
import FixedHeader from "@/components/dashboard/FixedHeader";
import Logo from "@/components/Logo";

export default async function DashboardIndex() {
  const { isMobile } = await getDeviceType();
  const user = await getUserProfileData();
  const posts = await fetchPosts();
  const bookings = await fetchBookings();

  const image = isMobile ? "/hamn-faro-mobile.jpg" : "/hamn-faro.jpg"

  return (
    <>
      {isMobile && <FixedHeader invisibleFromStart>
        <div className="w-8 fill-tertiary">
          <Logo />
        </div>
        </FixedHeader>}
      <div className={clsx("relative grid place-items-center overflow-hidden p-6", isMobile ? "h-[27.5rem] pt-safe-top" : "h-96")}>
          <figure className={clsx(isMobile ? "fixed inset-0 z-[1] h-dvh w-dvw" : "absolute inset-0 h-full w-full")}>
            <Image
              src={image}
              alt="Ett grönt fält med blåeld"
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-top"
            />
           {isMobile && <div className="fixed inset-0 h-full w-full bg-gradient-to-b from-black/30 from-[30rem] to-background to-[30rem]"></div>}
          </figure>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="mb-6 font-serif text-3xl font-semibold text-white lg:text-6xl">
              Hej, {user.given_name || user.name}
            </h1>
            <Weather lon="19.039444" lat="57.855" />
          </div>
        </div>
        <Main pullUp>
          <Section>
              <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground max-lg:text-center lg:text-4xl">
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
          <Section>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground max-lg:text-center lg:text-4xl">
              Information
            </h2>
            <Suspense fallback={<PostsLoading />}>
              <InfoPosts data={posts} />
            </Suspense>
        </Section>
        </Main>
    </>
  );
}