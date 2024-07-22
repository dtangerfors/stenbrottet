import { fetchUsers } from "@/app/lib/data"
import { UserTable } from "./user-table";

export default async function Page() {
  const users = await fetchUsers();
  return (
    <UserTable users={users} />
  )
}