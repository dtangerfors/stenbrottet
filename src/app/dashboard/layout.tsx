import { getDeviceType } from "@/lib/utils";
import AppProvider from "./app-context";
import { MobileNav } from "@/components/dashboard/MobileNav";
import DesktopNav from "@/components/dashboard/DesktopNav";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isMobile } = await getDeviceType();

  return (
    <AppProvider>
      <div className="flex min-h-dvh bg-background">
        {!isMobile && <DesktopNav isMobile={isMobile} />}
        <main className="flex-1">{children}</main>
        {isMobile && <MobileNav />}
      </div>
    </AppProvider>
  );
}
