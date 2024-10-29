import Logo from "@/components/Logo";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-dvh flex max-md:flex-col justify-end bg-white">
      <figure className="absolute inset-0 w-full h-dvh">
        <Image src="/digerhuvud-desktop.jpg" alt="Ett grönt fält med blåeld" quality={100} width={1920} height={1080} className="w-full h-full object-cover" />
      </figure>
      <div className="relative flex-1 grid place-items-center overflow-hidden bg-gradient-to-tr from-secondary-900/70 to-transparent max-md:-mb-6 max-md:pb-6">
        <div className="fill-white size-24">
          <Logo />
        </div>
      </div>
      <div className="relative md:h-full w-full lg:max-w-screen-sm flex flex-col justify-center items-center bg-white max-md:self-end max-md:rounded-t-3xl md:rounded-l-3xl">
        {children}
      </div>
    </main>
  );
}
