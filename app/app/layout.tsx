import clsx from "clsx";
import SideNav from "@/app/ui/dashboard/sidenav";
import { DesktopNav } from "../ui/dashboard/desktop-nav";
import { getDeviceType } from "../lib/utils";
import { MobileNav } from "../ui/dashboard/mobile-nav";
import AppProvider from "./app-context";
import { ModalContainer } from "../ui/modal";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = getDeviceType();

  return (
    <AppProvider>
      {!isMobile && (
        <div className="sticky top-0 z-10">
          <DesktopNav />
        </div>
      )}
      <div className={clsx("flex w-full items-start gap-6 lg:p-6", isMobile && "mt-14 flex-col")}>
        {!isMobile && <div className="hidden laptop:flex sticky top-[5.5rem]"><SideNav /></div>}
        <main className={clsx("w-full grow", isMobile && "flex flex-col")}>{children}</main>
      </div>
      {isMobile && (
        <div className="fixed bottom-0 left-0 z-20 w-full pb-safeBottom rounded-t-4xl bg-white px-6 pb-safe-bottom dark:bg-gray-950 shadow-lg">
          <MobileNav />
        </div>
      )}
      <ModalContainer />
    </AppProvider>
  );
}
