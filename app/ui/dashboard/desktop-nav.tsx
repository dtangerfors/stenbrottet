"use client"
import Link from "next/link";
import Logo from "@/app/ui/logo";
import NavLinks from "./nav-links";
import { useAppContext } from "@/app/app/app-context";

export const DesktopNav = () => {
  const {onOpen} = useAppContext();

  return (
    <div className="bg-white dark:bg-gray-950 px-6 border-b border-gray-100">
      <div className="flex items-center gap-8">
      <Link
        className="w-10 h-10 grid place-items-center bg-primary rounded-full fill-secondary dark:bg-primary-800"
        href="/"
      >
        <div className="w-6">
          <Logo />
        </div>
      </Link>
      <NavLinks />
      <div className="ml-auto">
        <Link href={"/app/booking/create"} className="btn-primary btn-sm"><span>Lägg in bokning</span></Link>
      </div>
      </div>
    </div>
  )
}