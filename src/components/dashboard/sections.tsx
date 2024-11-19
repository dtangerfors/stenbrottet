import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
}

export const Hero = ({ title }: {title: string}) => (
  <header className="bg-primary pt-safe-top">
    <div className="p-6 h-52 flex items-center lg:items-end">
      <h1 className="font-serif text-3xl font-extrabold text-secondary-100">{title}</h1>
    </div>
  </header>
)

export const Section = ({ children }: SectionProps) => (
  <section className="bg-surface p-6 rounded-2xl">
    {children}
  </section>
);

export const Main = ({children}: {children: React.ReactNode}) => (
  <div className="relative z-[1] md:p-6 bg-background max-lg:pb-[6.5rem]">
    <div className={clsx("relative flex flex-col gap-2 md:gap-6 max-md:mt-2 max-lg:-top-6 max-lg:-mb-6")}>
      {children}
    </div>
  </div>
)