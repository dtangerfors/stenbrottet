import { redirect } from 'next/navigation'
import { getSession } from "@auth0/nextjs-auth0";
import { getUser } from "@/lib/data";
import { Typography } from "@/components/typography";

export default async function Welcome() {
  const session = await getSession();
  const user = await getUser(session?.user.app_user_id)

  if (session?.user) {
    if (!user) {
      redirect('/signup')
    } else {
      redirect('/dashboard')
    }
  }

  return (
    <>
      <div className="relative z-10 my-6">
        <Typography level="h1" variant="xl" color="text-foreground-primary">
          <span>Stenbrottsvägen</span>
        </Typography>
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto p-6 text-center">
        <a
          href={"/api/auth/login"}
          className="inline-block bg-secondary-500 text-white rounded-2xl py-4 px-8 hover:bg-secondary-600 transition-all"
        >
          Logga in
        </a>
        <div className="py-6 md:pt-12 md:pb-0 text-center">
          <p className="font-sans font-normal text-foreground">
            Har du inget konto?{" "}
            <a href="/api/auth/login" className="font-bold text-foreground-1">
              Skapa ett nu.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
