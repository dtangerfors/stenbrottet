import type { Booking } from "@/app/lib/definitions";
import { Label, Title } from "./card_element";
import { TaskButton } from "../buttons";
import { showDate, showGuests, bookedDates, getRoomName } from "./display_functions";

const Card = ({booking, userIsLoggedIn, isUpdatingBooking}: {booking: Booking, userIsLoggedIn?: boolean, isUpdatingBooking?: any}) => {

  return (
    <div className="flex flex-col gap-6 flex-30 overflow-hidden rounded-4xl bg-white p-3 pb-6 dark:bg-gray-950 border border-gray-50 shadow-xl shadow-gray-700/10">
        <div className="col-span-3 grid place-items-center bg-secondary-100 text-xl font-semibold capitalize p-4 rounded-3xl text-secondary dark:bg-gray-700 dark:text-secondary-300">
          <span className="whitespace-nowrap">
            {bookedDates(booking.travel_dates.start, booking.travel_dates.end)}
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
          <p className="text-black-900 text-base font-medium leading-snug dark:text-white">
            <Label>Bokning inlagd av</Label>
            <span className="truncate">{booking.name}</span>
          </p>
          </div>
          <div className="col-span-1">
            <Label>Antal gäster</Label>
            <Title>{showGuests(booking.guests)}</Title>
          </div>
        </div>

        <div className="col-span-full flex gap-4">
          
          <div className="w-2/3">
            <Label>Bokade rum</Label>
            <Title>{getRoomName(booking.rooms)}</Title>
          </div>
        </div>

        {booking.message && (
          <div className="col-span-full">
            <Label>Meddelande</Label>
            <Title>{booking.message}</Title>
          </div>
        )}

      <div className="mt-auto">
        <div className="flex justify-between items-center w-full">
          <Label>
            <i className="ri-history-line align-text-top"></i>{" "}
            {showDate(booking.created_at)}
          </Label>
          {userIsLoggedIn && (
            <div className="flex">
              <TaskButton
                onClick={() => isUpdatingBooking(booking.id)}
                actionText={"Redigera"}
                icon={"pencil"}
              />
              <TaskButton
                // onClick={() =>
                //   bookingDb.removeBooking(booking.key, booking.bookingUserID)
                // }
                actionText={"Radera"}
                icon={"delete-bin-6"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;