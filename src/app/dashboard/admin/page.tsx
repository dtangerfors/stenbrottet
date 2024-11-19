import { Hero, Main } from "@/components/dashboard/sections";
import { UserTable } from "./user-table";
import { fetchUsers } from "@/lib/data";

export default async function AdminPage() {
  const users = await fetchUsers();

  return (
    <>
      <Hero title="Admin" />
      <Main>
        <div className="lg:hidden min-h-52 rounded-2xl bg-surface p-6 grid place-items-center">
          <p className="text-center">Din skärm är för liten för att kunna visa detta innehåll.</p>
        </div>
        <div className="max-lg:hidden">
          <UserTable users={users} />
        </div>
      </Main>
    </>
  )
}