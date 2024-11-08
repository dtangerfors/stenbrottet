import {
  PhotoIcon,
  UserCircleIcon,
  PresentationChartBarIcon,
  UserIcon,
  HomeIcon,
  CalendarIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type LinkProps = {
  name: string;
  href: string;
  renderNativeLink?: boolean;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & RefAttributes<SVGSVGElement>>
}[]

const admin: LinkProps = [
  { name: "Galleri", href: "/dashboard/gallery", icon: PhotoIcon },
  {
    name: "Statistik",
    href: "/dashboard/statistics",
    icon: PresentationChartBarIcon,
  },
  { name: "Admin", href: "/dashboard/admin", icon: UserCircleIcon },
];

const moderator: LinkProps = [
  { name: "Galleri", href: "/dashboard/gallery", icon: PhotoIcon },
  {
    name: "Statistik",
    href: "/dashboard/statistics",
    icon: PresentationChartBarIcon,
  },
];

const user: LinkProps = [
  { name: "Galleri", href: "/dashboard/gallery", icon: PhotoIcon },
];

export const logout: LinkProps = [
  { name: "Logga ut", href: "/api/auth/logout", icon: ArrowRightStartOnRectangleIcon, renderNativeLink: true}
]

export const navLinks: LinkProps = [
  { name: "Hem", href: "/dashboard", icon: HomeIcon },
  { name: "Kalender", href: "/dashboard/calendar", icon: CalendarIcon },
  { name: "Profil", href: "/dashboard/profile", icon: UserIcon },
];

export const dashboardLinks = {
  admin: admin,
  super_admin: admin,
  moderator: moderator,
  user: user,
};