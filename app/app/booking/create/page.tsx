import { auth } from "@/auth";
import { getUser } from '@/app/lib/data';
import { CreateBookingForm } from "@/app/ui/forms";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default async function Page() {
  const authData = await auth();
  const user = await getUser(authData!.user!.id as string);

  return (
    <div className="max-w-screen-sm mx-auto">
      <header className="py-6 flex justify-between">
        <h1 className="font-sans text-lg font-medium leading-tight text-black">Lägg in bokning</h1>
        <Link href={"/app"} className="text-lg"><XMarkIcon title="Klicka här för att stänga" width={24} /></Link>
      </header>
      <CreateBookingForm user={user} />
    </div>
  )
}