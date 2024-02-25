import SideNav from '@/app/ui/dashboard/sidenav';
import { DesktopNav } from '../ui/dashboard/desktop-nav';
import { getDeviceType } from '../lib/utils';
import clsx from 'clsx';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = getDeviceType();

  return (
    <>
      {!isMobile && (
        <div className="sticky top-0 z-10">
          <DesktopNav />
        </div>
      )}
      <div className={clsx("flex w-full items-start gap-6 lg:p-6", isMobile && "mt-14 flex-col")}>
        {!isMobile && <div className="hidden laptop:flex sticky top-[5.5rem]"><SideNav /></div>}
        <main className={clsx("w-full grow", isMobile && "flex flex-col")}>{children}</main>
      </div>
    </>
  );
}
