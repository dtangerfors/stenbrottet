
import { CreateBookingForm } from "@/components/forms";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { getUserProfileData } from "@/services/profile.service";

export default async function Page() {
  const user = await getUserProfileData();

  return (
    <>
      <header className="max-w-screen-sm w-full m-auto py-6 flex justify-between max-md:p-6 max-md:py-20">
        <h1 className="font-sans text-2xl font-medium leading-tight text-white">Lägg in bokning</h1>
        <Link href={"/dashboard"} className="text-lg text-white"><XMarkIcon title="Klicka här för att stänga" width={24} /></Link>
      </header>
      <div className="max-w-screen-sm w-full mx-auto bg-background rounded-t-2xl md:p-6 overflow-y-auto">
        <CreateBookingForm user={user} />
      </div>
    </>
  )
}