import { getUserProfileData } from "@/services/profile.service";
import Link from "next/link";

export default async function Welcome() {
  const user = await getUserProfileData();

  return (
    <>
      <div className="relative z-10 my-6">
        <h1 className="font-serif font-semibold text-3xl text-primary-800">
          {user ? (
            <span>Hej, {user.given_name || user.name}</span>
          ) : (
            <span>Stenbrottsvägen</span>
          )}
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-md bg-white mx-auto p-6 text-center">
        {user ? (
          <Link href="/dashboard" className="inline-block bg-secondary text-black rounded-2xl py-4 px-8">Gå till dashboard</Link>
        ) : (
          <>
            <a
              href={"/api/auth/login"}
              className="inline-block bg-secondary text-black rounded-2xl py-4 px-8"
            >
              Logga in
            </a>
            <div className="py-6 md:pt-12 md:pb-0 text-center">
              <p className="font-sans font-normal text-foreground">
                Har du inget konto?{" "}
                <a href="/api/auth/login" className="font-bold text-gray-600">
                  Skapa ett nu.
                </a>
              </p>
              <a href="/api/auth/logout">Logout</a>
            </div>
          </>
        )}
      </div>
    </>
  );
}
