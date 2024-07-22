import { PhotoIcon, FlagIcon, UserCircleIcon, PresentationChartBarIcon } from "@heroicons/react/24/solid";

const admin = [
  { name: "Galleri", href: "/app/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/app/report", icon: FlagIcon },
  { name: "Statistik", href: "/app/statistics", icon: PresentationChartBarIcon },
  { name: "Admin", href: "/app/admin", icon: UserCircleIcon },
];

const moderator = [
  { name: "Galleri", href: "/app/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/app/report", icon: FlagIcon },
  { name: "Statistik", href: "/app/statistics", icon: PresentationChartBarIcon },
];

const user = [
  { name: "Galleri", href: "/app/gallery", icon: PhotoIcon },
  { name: "Rapportera problem", href: "/app/report", icon: FlagIcon },
];

export const dashboardLinks = {
  admin: admin,
  super_admin: admin,
  moderator: moderator,
  user: user,
}