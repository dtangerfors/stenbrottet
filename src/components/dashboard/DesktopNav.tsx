"use client"
import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

export default function DesktopNav({isMobile}: {isMobile: RegExpMatchArray | null}) {
  const pathname = usePathname();

  return (
    <div className="w-72 flex flex-col gap-12 bg-white p-6 dark:bg-gray-950">
      <Link
        className="flex gap-4 items-center"
        href="/"
      >
        <div className="w-8 fill-tertiary">
          <Logo />
        </div>
      </Link>
      <Navigation isMobile={isMobile} />
    </div>
  )
}