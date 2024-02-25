"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserIcon,
  HomeIcon,
  CalendarIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Hem', href: '/app', icon: HomeIcon },
  { name: 'Kalender', href: '/app/calendar', icon: CalendarIcon },
  { name: 'Profil', href: '/app/profile', icon: UserIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={"flex gap-2"}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={`menu-item-${link.name.toLowerCase()}`}>
            <Link
              href={link.href}
              className={clsx(
                "flex grow items-center gap-2 px-2 font-sans text-base font-medium hover:text-black transition-all",
                {"text-gray-500 dark:text-white" : pathname !== link.href},
                {"text-secondary dark:text-secondary-200" : pathname === link.href},
                "leading-[4rem]"
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
        
      })}
      <li key={`menu-item-menu`} className="laptop:hidden">
            <Link
              href="/app/menu"
              className={clsx(
                "flex grow items-center gap-2 px-2 font-sans text-base font-medium hover:text-black transition-all",
                {"text-gray-500 dark:text-white" : pathname !== "/app/menu"},
                {"text-secondary dark:text-secondary-200" : pathname === "/app/menu"},
                "leading-[4rem]"
              )}
            >
              <Bars3Icon className="w-6" />
              <p className="hidden md:block">Meny</p>
            </Link>
          </li>
    </ul>
  );
}