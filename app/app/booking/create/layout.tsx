export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 w-full h-full z-50">
      <div className="absolute -z-0 w-full h-full bg-white/70 backdrop-blur-md"></div>
      <div className="relative p-6 pt-safe-top pb-safe-bottom">
        {children}
      </div>
    </div>
  )
}