"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhotoIcon, FlagIcon, UserCircleIcon, PresentationChartBarIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Galleri", href: "/app/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/app/report", icon: FlagIcon },
  { name: "Statistik", href: "/app/statistics", icon: PresentationChartBarIcon },
  { name: "Admin", href: "/app/admin", icon: UserCircleIcon },
];


type SideNavLinksProps = {
  isMobile?: RegExpMatchArray | null;
}

export default function SideNavLinks({isMobile}: SideNavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={clsx("flex flex-col", !isMobile && "gap-2", isMobile && "gap-px rounded-3xl overflow-hidden")}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={`menu-item-${link.name.toLowerCase()}`}>
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "group flex grow items-center font-sans text-base font-medium transition-all",
                "hover:bg-gray-200 hover:text-black",
                "dark:hover:bg-gray-800 dark:hover:text-white",
                !isMobile && "gap-2 p-2 rounded-3xl",
                isMobile && "gap-4 p-5 bg-white dark:bg-gray-950",
                pathname !== link.href && "text-gray-500 dark:text-gray-300",
                pathname === link.href && "text-secondary dark:text-secondary-200",
              )}
            >
              <span className={clsx(
                "grid place-items-center rounded-full transition-all",
                !isMobile && "h-8 w-8 bg-gray-200 group-hover:bg-primary group-hover:text-secondary",
                !isMobile && "dark:bg-gray-800 group-hover:dark:bg-primary-700 group-hover:dark:text-secondary-400"
                )}>
                <LinkIcon className={clsx(!isMobile && "w-4", isMobile && "w-6")} />
              </span>
              <p className="grow">{link.name}</p>
              <ChevronRightIcon className="w-6" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}