import Image from "next/image"
import Weather from "../ui/weather"
import BookingCalendar from "../ui/calendar"

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="relative grid place-items-center lg:h-96 p-6 rounded-3xl overflow-hidden">
        <figure className="absolute inset-0 w-full h-full">
          <Image src="/digerhuvud-desktop.jpg" alt="Ett grönt fält med blåeld" width={1920} height={1080} className="w-full h-full object-cover object-top" />
          <div className="absolute w-full h-full inset-0 bg-black/30"></div>
        </figure>
        <div className="relative flex flex-col items-center">
          <h1 className="font-serif font-semibold text-6xl text-white mb-6">Stenbrottsvägen</h1>
          <Weather lon="19.039444" lat="57.855" />
        </div>
        
      </div>
      <div>
          <BookingCalendar />
        </div>
    </div>
  )
}