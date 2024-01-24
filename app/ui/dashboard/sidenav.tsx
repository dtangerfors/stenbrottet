import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <header className="sticky top-6 w-64 h-[calc(100vh-3rem)] flex flex-col gap-2">
      <Link
        className="w-full h-24 flex items-center bg-primary p-6 rounded-3xl hover:bg-primary-700 transition-all"
        href="/"
      >
        <div className="w-12">
          <Logo />
        </div>
      </Link>
        <NavLinks />
        <div className="hidden h-auto w-full grow bg-gray-50 rounded-3xl md:block dark:bg-gray-900"></div>
        <form className="w-full">
          <button className="flex gap-2 items-center w-full p-4 bg-gray-50 rounded-3xl font-sans font-bold text-sm uppercase tracking-wider text-left dark:bg-gray-900 dark:text-white">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Logga ut</div>
          </button>
        </form>
    </header>
  );
}
