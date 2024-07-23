import { getDeviceType } from "@/app/lib/utils";
import SideNav from "@/app/ui/dashboard/sidenav";
import FixedHeader from "@/app/ui/layout/mobile-header";
import clsx from "clsx";

export default function Menu() {
  const {isMobile} = getDeviceType(); 

  return (
    <>
      {isMobile && <FixedHeader label="Meny" />}
      <div className={clsx("flex w-full gap-4 p-6", isMobile && "mt-14")}>
        <SideNav isMobile={isMobile}  />
      </div>
    </>
  )
}