"use client"
import { Booking } from "@/lib/definitions";
import { generateYAxis, sortBookingsByYear } from "./utils";

export function BookingChart({ bookings }: { bookings: Booking[] }) {

  const chartHeight = 350;
  const { bookingsByYear } = sortBookingsByYear(bookings);
  const { topLabel, yAxisLabels } = generateYAxis(bookings);

  return (
    <div className="w-full mx-auto rounded-2xl bg-surface p-3 pb-8 text-sm">
      <div className="p-3">
        <span className="font-serif text-2xl font-medium leading-tight text-primary dark:text-white">Bokningar per år</span>
      </div>
      <div className="px-3">
        <div className="flex gap-2">
          {/* y-axis */}
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex w-12"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.reverse().map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {Object.values(bookingsByYear).reverse().map((year, i) => (
            <div key={`year-${year.length}-${i}`} className="flex flex-col flex-1 items-center justify-end gap-2">
              {/* bars */}
              <div
                className="w-full max-w-6 rounded-md bg-secondary dark:bg-secondary-500"
                style={{
                  height: `${(chartHeight / topLabel) * year.length}px`,
                }}
              ></div>
              {/* x-axis */}
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {Object.keys(bookingsByYear).reverse()[i]}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}