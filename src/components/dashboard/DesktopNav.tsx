import Link from "next/link";
import Logo from "@/components/Logo";
import Navigation from "./Navigation";
import { getUserProfileData } from "@/services/profile.service";
import { getUser } from "@/lib/data";

export default async function DesktopNav() { 
  const user = await getUserProfileData();
  const { user_role } = await getUser(user.app_user_id);
  return (
    <div className="flex flex-col gap-12">
      <Link
        className="flex gap-4 items-center"
        href="/"
      >
        <div className="w-8 fill-secondary">
          <Logo />
        </div>
      </Link>
      <Navigation role={user_role} />
    </div>
  )
}