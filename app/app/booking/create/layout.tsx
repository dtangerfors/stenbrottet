export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 w-full h-full z-50">
      <div className="absolute -z-0 w-full h-full bg-white/70 backdrop-blur-md"></div>
      <div className="relative p-3 lg:p-6">
        {children}
      </div>
    </div>
  )
}