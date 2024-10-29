import {
  PhotoIcon,
  FlagIcon,
  UserCircleIcon,
  PresentationChartBarIcon,
  UserIcon,
  HomeIcon,
  CalendarIcon,
} from "@/components/icons";

const admin = [
  { name: "Galleri", href: "/dashboard/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/dashboard/report", icon: FlagIcon },
  {
    name: "Statistik",
    href: "/dashboard/statistics",
    icon: PresentationChartBarIcon,
  },
  { name: "Admin", href: "/dashboard/admin", icon: UserCircleIcon },
];

const moderator = [
  { name: "Galleri", href: "/dashboard/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/dashboard/report", icon: FlagIcon },
  {
    name: "Statistik",
    href: "/dashboard/statistics",
    icon: PresentationChartBarIcon,
  },
];

const user = [
  { name: "Galleri", href: "/dashboard/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/dashboard/report", icon: FlagIcon },
];

export const navLinks = [
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