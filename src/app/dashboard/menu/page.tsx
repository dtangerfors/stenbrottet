import clsx from "clsx";
import { getDeviceType } from "@/lib/utils";
import Navigation from "@/components/dashboard/Navigation";
import FixedHeader from "@/components/dashboard/FixedHeader";
import Image from "next/image";
import { getUserProfileData } from "@/services/profile.service";
import { getUser } from "@/lib/data";

export default async function Menu() {
  const {isMobile} = getDeviceType(); 
  const user = await getUserProfileData();
  const { user_role } = await getUser(user.app_user_id);

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
      <div className="relative z-10 pt-safe-top">
        <div className="p-6 h-44 grid place-items-center">
          <h1 className="font-serif text-3xl font-semibold text-white">Meny</h1>
        </div>
        <div className={clsx("relative z-10 flex w-full max-w-screen-sm mx-auto gap-4 p-6 pb-28")}>
          <Navigation role={user_role} />
        </div>
      </div>
    </>
  )
}