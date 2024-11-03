import clsx from "clsx";
import { getDeviceType } from "@/lib/utils";
import Navigation from "@/components/dashboard/Navigation";
import FixedHeader from "@/components/dashboard/FixedHeader";
import Image from "next/image";

export default function Menu() {
  const {isMobile} = getDeviceType(); 

  return (
    <>
      {isMobile && <FixedHeader label="Meny" invisibleFromStart />}
      <figure className={clsx(isMobile ? "fixed inset-0 z-[1] h-dvh w-dvw" : "absolute inset-0 h-full w-full")}>
        <Image
          src="/digerhuvud-desktop.jpg"
          alt="Ett grönt fält med blåeld"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 h-full w-full bg-black/30"></div>
      </figure>

      <div className="relative z-10 pt-20">
        <div className="sticky top-32 h-80 my-12 text-center px-6">
          <h1 className="font-serif text-3xl font-semibold text-white">Meny</h1>
        </div>
        <div className={clsx("relative z-10 flex w-full gap-4 p-6 pb-28")}>
          <Navigation isMobile={isMobile}  />
        </div>

      <div className={clsx("relative z-10 flex w-full gap-4 p-6", isMobile && "mt-14")}>
        <Navigation isMobile={isMobile}  />

      </div>
    </>
  )
}