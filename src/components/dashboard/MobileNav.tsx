"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserIcon,
  HomeIcon,
  CalendarIcon,
  Bars3Icon,
  PlusIcon
} from "@/components/icons";

const links = [
  { name: "Hem", href: "/dashboard", icon: HomeIcon },
  { name: "Kalender", href: "/dashboard/calendar", icon: CalendarIcon },
  { name: "Lägg in bokning", href: "/dashboard/booking/create", icon: PlusIcon },
  { name: "Profil", href: "/dashboard/profile", icon: UserIcon },
  { name: "Meny", href: "/dashboard/menu", icon: Bars3Icon },
];

export const MobileNav = () => {

  return (
    <div className="fixed bottom-0 left-0 z-20 w-full bg-background px-6 pb-safe-bottom">
      <ul className={clsx("flex w-full gap-2")}>
        {links.map((link, i) => <li key={`link-${i}`} className="flex-1"><NavLink link={link}/></li>)}
      </ul>
    </div>
  );
};

type LinkProps = {
  name: string;
  href: string;
  icon: ({ size }: { size?: string | undefined; }) => JSX.Element;
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
        { "text-tertiary dark:text-tertiary-200": pathname === link.href },
      )}
    >
      <LinkIcon size="size-6"/>
      <span className="sr-only">{link.name}</span>
    </Link>
  );
}
