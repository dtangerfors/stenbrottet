"use client";
import clsx from "clsx";
import Link from "next/link";
import { dashboardLinks, navLinks, logout } from "@/app/dashboard/links";
import { usePathname } from "next/navigation";

export default function Navigation({role}: {role: string}) {
  const pathname = usePathname();
  const roleLinks = dashboardLinks[role as keyof typeof dashboardLinks];
  const links = [...navLinks, ...roleLinks, ...logout];

  return (
    <nav className="w-full">
      <ul
        className={clsx("flex flex-col gap-2 lg:-mx-1")}
      >
        {links.map((link) => {
          const LinkIcon = link.icon;
          const activeLink = pathname === link.href;

          const styling = {
            link: clsx( "group flex grow items-center font-sans text-base font-normal transition-all",
                        "hover:bg-secondary-100 hover:text-black",
                        "dark:hover:bg-gray-800 dark:hover:text-white",
                        "gap-4 p-5 bg-surface rounded-2xl",
                        "lg:gap-2 lg:p-1 lg:rounded-xl",
                        !activeLink && "text-foreground-1",
                        activeLink && "text-foreground"
                      ),
            iconWrapper: clsx("grid place-items-center rounded-lg transition-all",
                              "lg:size-8 lg:group-hover:bg-secondary lg:group-hover:text-secondary-950",
                              "lg:group-hover:dark:bg-secondary",
                              activeLink && "text-secondary-100 dark:text-secondary-950 size-8 lg:bg-secondary lg:dark:bg-secondary")
          }
          if (link.renderNativeLink) {
            return (
              <li key={`menu-item-${link.name.toLowerCase()}`}>
                <a
                  key={link.name}
                  href={link.href}
                  className={styling.link}
                >
                  <span
                    className={styling.iconWrapper}
                  >
                    <LinkIcon className="w-4" strokeWidth="2"/>
                  </span>
                  <p className="grow">{link.name}</p>
                </a>
            </li>
            )
          }

          return (
            <li key={`menu-item-${link.name.toLowerCase()}`}>
              <Link
                key={link.name}
                href={link.href}
                className={styling.link}
              >
                <span
                  className={styling.iconWrapper}
                >
                  <LinkIcon className="w-4" strokeWidth="2"/>
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
