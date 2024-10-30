"use client";
import clsx from "clsx";
import Link from "next/link";
import { dashboardLinks, navLinks } from "@/app/dashboard/links";
import { usePathname } from "next/navigation";

export default function Navigation({
  isMobile,
}: {
  isMobile: RegExpMatchArray | null;
}) {
  const pathname = usePathname();
  // const roleLinks = dashboardLinks[role as keyof typeof dashboardLinks];
  const roleLinks = dashboardLinks["admin"];
  const links = [...navLinks, ...roleLinks];

  return (
    <nav className="w-full">
      <ul
        className={clsx(
          "flex flex-col",
          !isMobile && "gap-2 -mx-1",
          isMobile &&
            "gap-1"
        )}
      >
        {links.map((link) => {
          const LinkIcon = link.icon;
          const activeLink = pathname === link.href;
          return (
            <li key={`menu-item-${link.name.toLowerCase()}`}>
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "group flex grow items-center font-sans text-base font-normal transition-all",
                  "hover:bg-secondary-100 hover:text-black",
                  "dark:hover:bg-gray-800 dark:hover:text-white",
                  !isMobile && "gap-2 p-1 rounded-xl",
                  isMobile && "gap-4 p-5 bg-white dark:bg-gray-950 rounded-2xl",
                  !activeLink && "text-gray-500 dark:text-gray-300",
                  activeLink && "text-black dark:text-white"
                )}
              >
                <span
                  className={clsx(
                    "grid place-items-center rounded-lg transition-all",
                    !isMobile &&
                      "size-8 group-hover:bg-secondary-500 group-hover:text-secondary-100",
                    !isMobile &&
                      "dark:bg-gray-800 group-hover:dark:bg-primary-700 group-hover:dark:text-secondary-400",
                    activeLink && "text-secondary-100 size-8 bg-secondary-500"
                  )}
                >
                  <LinkIcon />
                </span>
                <p className="grow">{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
