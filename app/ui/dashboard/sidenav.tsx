import clsx from "clsx";
import SideNavLinks from "./sidenav-links";
import {
  ArrowRightStartOnRectangleIcon as SignOutMobile,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import {ArrowRightStartOnRectangleIcon as SignOutDesktop} from "@heroicons/react/16/solid"
import { getData, getUser } from "@/app/lib/data";
import { signOut, auth } from "@/auth";

export default async function SideNav({
  isMobile,
}: {
  isMobile?: RegExpMatchArray | null;
}) {
  const authData = await auth();
  const user = await getUser(authData!.user!.id as string);

  return (
    <div
      className={clsx(
        "sticky top-[5.5rem] flex flex-col gap-6",
        isMobile ? "w-full" : "w-72",
      )}
    >
      <SideNavLinks isMobile={isMobile} role={user.user_role} />
      <div className="mt-auto">

      <form 
        action={async () => {
          "use server";
          await signOut();
        }}
        className={clsx("w-full")}>
        <hr className="mx-6 mb-6" />
        <button
          className={clsx(
            "group flex w-full items-center rounded-3xl overflow-hidden font-sans text-base font-medium transition-all",
            "hover:bg-gray-200 hover:text-black",
            "dark:hover:bg-gray-800 dark:hover:text-white",
            !isMobile && "gap-2 p-2 rounded-3xl",
            isMobile && "gap-4 p-5 bg-white dark:bg-gray-950 border border-gray-50 shadow-xl shadow-gray-700/10",
            "text-gray-500 dark:text-gray-300",
            )}
            >
          <span className={clsx(
            "grid place-items-center rounded-full transition-all",
            !isMobile && "h-8 w-8 bg-gray-200 group-hover:bg-primary group-hover:text-secondary",
            !isMobile && "dark:bg-gray-800 group-hover:dark:bg-primary-700 group-hover:dark:text-secondary-400"
            )}
            >
            {isMobile ? <SignOutMobile className="w-6" /> : <SignOutDesktop className="w-4" />}
          </span>
          <p className="grow text-left">Logga ut</p>
          <ChevronRightIcon className="w-6 opacity-0 group-hover:opacity-100 transition-all" />
        </button>
      </form>
      
      </div>
    </div>
  );
}
