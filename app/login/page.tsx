import Image from "next/image";
import LoginForm from "./login-form";

export default function Page() {
  return (
    <main className="relative w-full h-dvh flex lg:p-6 justify-end bg-white">
      <figure className="absolute inset-0 w-full h-dvh">
        <Image src="/digerhuvud-desktop.jpg" alt="Ett grönt fält med blåeld" width={1920} height={1080} className="w-full h-full object-cover" />
      </figure>
      <div className="relative h-full w-full max-w-screen-sm flex flex-col justify-center items-center lg:bg-white lg:rounded-3xl">
        <div className="relative z-10 mb-6 max-lg:my-auto">
          <h1 className="font-serif font-semibold text-3xl text-white lg:text-primary">Stenbrottsvägen</h1>
        </div>
        <div className="relative z-10 flex flex-col gap-6  w-full max-w-md bg-white rounded-t-[40px] mx-auto p-6">
          <LoginForm />

          <div className="flex gap-8 items-center">
            <span className="h-px flex-1 bg-gray-200"></span>
            <span className="font-sans text-gray-500">eller</span>
            <span className="h-px flex-1 bg-gray-200"></span>
          </div>

          <div className="w-full">
            <button className="btn-tertiary btn-lg w-full">Logga in med Google</button>
          </div>
        </div>
      </div>
    </main>
  );
}
