import SideNav from "@/app/ui/dashboard/sidenav"

export default function AppLayout({ children} : { children: React.ReactNode }) {
  return (
    <div className="flex w-full gap-6 lg:p-6">
      <SideNav />
      <main className="w-full">{children}</main>
    </div>
  )
}