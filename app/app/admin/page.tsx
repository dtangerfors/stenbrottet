import { fetchUsers } from "@/app/lib/data"
import { UserTable } from "./user-table";
import { getDeviceType } from "@/app/lib/utils";
import FixedHeader from "@/app/ui/layout/mobile-header";
import clsx from "clsx";

export default async function Page() {
  const users = await fetchUsers();
  const {isMobile} = getDeviceType();

  return (
    <>
      {isMobile && <FixedHeader label="Meny" />}
      <div className={clsx("flex w-full gap-4 p-6", isMobile && "mt-14")}>
        <UserTable users={users} />
      </div>
    </>
  )
}