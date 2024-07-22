"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import {
  UserIcon,
  HomeIcon,
  CalendarIcon,
  Bars3Icon,
  PlusIcon
} from "@heroicons/react/24/outline";
import { useAppContext } from "@/app/app/app-context";

const links = [
  { name: "Hem", href: "/app", icon: HomeIcon },
  { name: "Kalender", href: "/app/calendar", icon: CalendarIcon },
  { name: "Lägg in bokning", href: "/app/booking/create", icon: PlusIcon },
  { name: "Profil", href: "/app/profile", icon: UserIcon },
  { name: "Meny", href: "/app/menu", icon: Bars3Icon },
];

export const MobileNav = ({}) => {

  const {onOpen} = useAppContext();

  return (
    <ul className={clsx("flex w-full gap-2")}>
      {links.map((link, i) => <li key={`link-${i}`} className="flex-1"><NavLink link={link}/></li>)}
    </ul>
  );
};

type LinkProps = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

function NavLink({link}: {link:LinkProps}) {
  const pathname = usePathname();
  const LinkIcon = link.icon;

  return (
    <Link
      key={link.name}
      href={link.href}
      className={clsx(
        "flex grow items-center justify-center gap-2 py-4 text-base font-medium transition-all hover:text-black",
        { "text-gray-500 dark:text-white": pathname !== link.href },
        { "text-secondary dark:text-secondary-200": pathname === link.href },
      )}
    >
      <LinkIcon className="w-6" />
      <span className="sr-only">{link.name}</span>
    </Link>
  );
}
