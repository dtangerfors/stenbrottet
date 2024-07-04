"use client"

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import { Input } from "@nextui-org/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const inputStyling = {
  innerWrapper: "bg-transparent",
  inputWrapper: "bg-white border border-gray-200 shadow-xl shadow-gray-700/10 data-[hover=true]:bg-default-50",
};

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch} className="flex flex-col gap-4">
      <Input type="email" name="email" label={"Email"} classNames={inputStyling} />
      <Input type="password" name="password" label={"Lösenord"} classNames={inputStyling} />

      {errorMessage && (
        <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
        >
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
        </div>
      )}
      
      <button type="submit" aria-disabled={pending} className="btn-primary btn-lg block mt-4">Logga in</button>
    </form>
  )
}