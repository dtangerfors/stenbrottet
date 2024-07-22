"use client"
import { useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import type { User } from "@/app/lib/definitions";
import { UpdateUser } from "@/app/ui/modal/update-user";

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
    <div className="rounded-4xl bg-white p-3 border border-gray-50 shadow-xl shadow-gray-700/10">
    <Table aria-label="Mina bokningar" color="secondary" removeWrapper classNames={tableStyling}>
      <TableHeader className="uppercase">
        <TableColumn>Namn</TableColumn>
        <TableColumn>Mail</TableColumn>
        <TableColumn>Rättigheter</TableColumn>
        <TableColumn>Ändra</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.user_role}</TableCell>
            <TableCell><UpdateUser user={user} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}