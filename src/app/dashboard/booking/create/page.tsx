
import { CreateBookingForm } from "@/components/forms";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { getUserProfileData } from "@/services/profile.service";
import { getUser } from "@/lib/data";

export default async function Page() {
  const user_data = await getUserProfileData();
  const user = await getUser(user_data.app_user_id);

  return (
    <>
      <header className="pt-safe-top mb-auto">
        <div className="max-w-screen-sm w-full m-auto p-6 flex justify-between">
          <h1 className="font-sans text-2xl font-medium leading-tight text-white">Lägg in bokning</h1>
          <Link href={"/dashboard"} className="text-lg text-black bg-white size-10 rounded-full grid place-items-center"><XMarkIcon title="Klicka här för att stänga" width={24} /></Link>
        </div>
      </header>
      <div className="max-w-screen-sm w-full mx-auto bg-background rounded-t-2xl sm:p-6 overflow-y-auto">
        <CreateBookingForm user={user} />
      </div>
    </>
  )
}