import { getDeviceType } from "@/app/lib/utils";
import clsx from "clsx";

export function Tile({ number, text, icon }: { number: any; text: string, icon: React.ReactNode }) {

  const { isMobile } = getDeviceType();

  return (
    <div className={clsx("rounded-4xl bg-white p-3 border border-gray-50 shadow-xl shadow-gray-700/10", {"snap-center scroll-ml-3 w-64 shrink-0" : isMobile})}>
      <div className="flex items-center gap-3 p-3">
        <span className="inline-block size-6 *:stroke-gray-500">{icon}</span>
        <span className="font-sans text-base font-medium leading-tight text-gray-500">{text}</span>
      </div>
      <div className="bg-secondary-100 p-3 py-6 flex flex-col text-center rounded-3xl">
        <span className="font-serif font-extrabold text-4xl text-secondary-700 leading-none">
          {number}
        </span>
      </div>
    </div>
  )
}