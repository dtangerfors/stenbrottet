"use client"
import { useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import type { User } from "@/lib/definitions";
import { UpdateUser } from "@/components/modal/update-user";
import clsx from "clsx";

export function UserTable({users}: {users: User[]}) {

  const tableStyling = useMemo(() => ({
    th: [
      "uppercase",
      "group-data-[first=true]:last:rounded-r-2xl",
      "group-data-[middle=true]:rounded-none",
      "group-data-[last=true]:rounded-none",
    ],
  }), [])

  return (
    <div className="rounded-2xl bg-surface p-3 overflow-x-auto">
    <Table aria-label="Mina bokningar" color="secondary" removeWrapper classNames={tableStyling} className="min-w-[640px]">
      <TableHeader className="uppercase">
        <TableColumn>Namn</TableColumn>
        <TableColumn>Mail</TableColumn>
        <TableColumn>Rättigheter</TableColumn>
        <TableColumn align="center">Färg</TableColumn>
        <TableColumn align="end">Ändra</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.user_role}</TableCell>
            <TableCell align="right"><span className={clsx("block size-4 rounded-full overflow-hidden mx-auto", `bg-${user.user_color}`)}></span></TableCell>
            <TableCell align="right"><UpdateUser user={user} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}