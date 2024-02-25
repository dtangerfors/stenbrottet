import Link from "next/link";
import Logo from "@/app/ui/logo";
import NavLinks from "./nav-links";

export const DesktopNav = () => {
  return (
    <div className="bg-white dark:bg-gray-950 px-6">
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
        <button type="button" className="bg-secondary px-4 py-2 rounded-3xl text-xs text-white uppercase tracking-wide font-sans font-medium hover:bg-secondary-500">Lägg in bokning</button>
      </div>
      </div>
    </div>
  )
}