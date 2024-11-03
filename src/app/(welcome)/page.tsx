import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <div className="relative z-10 my-6">
        <h1 className="font-serif font-semibold text-3xl text-primary-800">
          Stenbrottsvägen
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-md bg-white mx-auto p-6 text-center">
        <a
          href={"/api/auth/login"}
          className="bg-secondary text-black rounded-2xl py-4 px-8"
        >
          Logga in
        </a>
        <div className="py-6 md:pt-12 md:pb-0 text-center">
          <p className="font-sans font-normal text-primary-950">
           Gå vidaret till
            <Link href="/dashboard" className="font-bold text-gray-600">
              startsidan
            </Link>
          </p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </>
  );
}
