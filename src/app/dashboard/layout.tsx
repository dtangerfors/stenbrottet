import Navigation from "@/components/dashboard/Navigation";
import { getDeviceType } from "@/lib/utils";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isMobile } = await getDeviceType();

  return (
    <div className="flex min-h-dvh bg-offwhite">
      <Navigation isMobile={isMobile} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
