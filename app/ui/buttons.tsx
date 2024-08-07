import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/react";

export const TaskButton = ({ onClick, actionText, icon }: any) => {
  const iconClassName = `ri-${icon}-fill`;

  return (
    <button
      onClick={onClick}
      className="relative ml-2 flex items-center justify-center rounded-[3rem] py-3 pl-4 pr-3 text-sm font-medium uppercase leading-none text-gray-400 transition-all duration-200 ease-in-out hover:bg-gray-100"
    >
      <span className="mr-2">{actionText}</span>{' '}
      <i className={iconClassName}></i>
    </button>
  );
};

export const PrimaryButton = ({ onClick, actionText, text }: any) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "grid place-items-center h-12 min-w-[14rem] p-3 bg-secondary rounded-full",
        "text-sm font-semibold text-white tracking-wide uppercase leading-none",
        "transition-all duration-200 ease-in-out hover:bg-secondary-700"
      )}
    >
      <span className="sr-only">{actionText}</span> {text}
    </button>
  );
};

export function UpdateBooking({ id }: { id: string }) {
  return (
    <Link
      href={`/app/booking/${id}/edit`}
      className="inline-block rounded-full p-1 text-gray-500 hover:text-gray-950"
    >
      <Tooltip content="Ändra bokning">
        <PencilSquareIcon width={24}/>
      </Tooltip>
    </Link>
  );
}