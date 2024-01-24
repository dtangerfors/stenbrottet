"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserIcon,
  HomeIcon,
  InformationCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Hem', href: '/app', icon: HomeIcon },
  { name: 'Info', href: '/app/info', icon: InformationCircleIcon },
  { name: 'Profil', href: '/app/profile', icon: UserIcon },
  { name: 'Meny', href: '/app/menu', icon: Bars3Icon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={`menu-item-${link.name.toLowerCase()}`}>
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-black flex grow items-center gap-2 rounded-3xl p-4 font-sans text-base font-medium hover:bg-secondary hover:text-white transition-all",
                {"bg-gray-50 text-black dark:bg-gray-900 dark:text-white" : pathname !== link.href},
                {"bg-secondary-200 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-200" : pathname === link.href}
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}