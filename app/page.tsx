import Image from "next/image";

export default function Page() {
  return (
    <main className="relative w-full h-screen flex lg:p-6">
      <div className="relative w-full h-full flex flex-col justify-end md:justify-center items-center overflow-hidden lg:rounded-3xl">
        <figure className="absolute inset-0 w-full h-full">
          <Image src="/digerhuvud-desktop.jpg" alt="Ett grönt fält med blåeld" width={1920} height={1080} className="w-full h-full object-cover" />
        </figure>
        <div className="relative z-10 mb-6">
          <h1 className="font-serif font-semibold text-3xl text-white">Stenbrottsvägen</h1>
        </div>
        <div className="relative z-10 w-full max-w-md bg-white rounded-t-[40px] md:rounded-b-[40px] -mt-10 md:mt-0 mx-auto p-6">
          <button className="flex justify-center w-full py-4 px-12 rounded-full bg-secondary font-sans font-bold text-sm uppercase tracking-wider text-white">Logga in</button>
          <div className="py-6 md:pt-12 md:pb-0 text-center">
            <p className="font-sans font-normal text-primary-950">Inget konto än? <a href="/" className="font-bold text-secondary">Skapa konto!</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
