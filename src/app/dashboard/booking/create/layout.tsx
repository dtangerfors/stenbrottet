import { getDeviceType } from "@/lib/utils";
import Image from "next/image";

export default async function BookingLayout({ children }: { children: React.ReactNode }) {

  const { isMobile } = await getDeviceType();

  const image = isMobile ? "/gotland-road-mobile.jpg" : "/gotland-road.jpg"

  return (
    <div className="fixed inset-0 w-full h-full z-50">
      <div className="absolute -z-0 w-full h-full">
        <Image src={image} width={isMobile ? 1080 : 1920} height={isMobile ? 1920 : 1080} alt="Väg på Gotland" className="size-full object-cover" />
      </div>
      <div className="relative flex flex-col h-full pt-safe-top">
        {children}
      </div>
    </div>
  )
}