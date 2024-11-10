import AppProvider from "./app-context";
import { MobileNav } from "@/components/dashboard/MobileNav";
import DesktopNav from "@/components/dashboard/DesktopNav";
import clsx from "clsx";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <AppProvider>
      <div className="flex min-h-dvh bg-background">
        <div className={clsx(
          "fixed bottom-0 left-0 z-20 w-full bg-background px-6 pb-safe-bottom",
          "lg:w-72 lg:h-full lg:bg-surface lg:p-6"
          )}>
            <div className="hidden lg:block">
              <DesktopNav />
            </div>
            <div className="block lg:hidden">
              <MobileNav />
            </div>
        </div>
        <main className="flex-1 lg:ml-72">{children}</main>
      </div>
    </AppProvider>
  );
}
