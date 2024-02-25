import { getDeviceType } from "@/app/lib/utils";
import SideNav from "@/app/ui/dashboard/sidenav";
import FixedHeader from "@/app/ui/layout/mobile-header";

export default function Menu() {
  const {isMobile} = getDeviceType(); 

  return (
    <>
      {isMobile && <FixedHeader label="Meny" />}
      <div className="flex w-full gap-4 p-6">
        <SideNav isMobile={isMobile}  />
      </div>
    </>
  )
}