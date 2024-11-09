import Link from "next/link";

export default async function Welcome() {
  return (
    <>
      <div className="relative z-10 my-6">
        <h1 className="font-serif font-semibold text-3xl text-primary-800 dark:text-primary-100">
          <span>Stenbrottsvägen</span>
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto p-6 text-center">
        <a
          href={"/api/auth/login"}
          className="inline-block bg-secondary text-black rounded-2xl py-4 px-8 dark:bg-secondary-500"
        >
          Logga in
        </a>
        <div className="py-6 md:pt-12 md:pb-0 text-center">
          <Link href="/dashboard" className="text-foreground">
            Gå till dashboard
          </Link>
          <p className="font-sans font-normal text-foreground">
            Har du inget konto?{" "}
            <a href="/api/auth/login" className="font-bold text-foreground-1">
              Skapa ett nu.
            </a>
          </p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </>
  );
}
