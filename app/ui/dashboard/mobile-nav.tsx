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
  { name: "Profil", href: "/app/profile", icon: UserIcon },
  { name: "Meny", href: "/app/menu", icon: Bars3Icon },
];

export const MobileNav = ({}) => {

  const {onOpen} = useAppContext();

  return (
    <ul className={clsx("flex w-full gap-2")}>
      <li className="flex-1"><NavLink link={links[0]}/></li>
      <li className="flex-1"><NavLink link={links[1]}/></li>
      <li className="flex-1">
        <Button 
          onPress={onOpen} 
          aria-label="Lägg till bokning"
          isIconOnly 
          radius="full" 
          variant="light" 
          className="w-full flex h-auto py-4 text-base font-medium hover:text-black">
          <PlusIcon className="w-6 block text-gray-500 dark:text-white"/>
        </Button></li>
      <li className="flex-1"><NavLink link={links[2]}/></li>
      <li className="flex-1"><NavLink link={links[3]}/></li>
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
