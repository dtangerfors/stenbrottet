import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
}

export const Hero = ({ title }: {title: string}) => (
  <header className="bg-primary rounded-b-2xl lg:rounded-none pt-safe-top">
    <div className="p-6 h-44 flex items-center lg:items-end">
      <h1 className="font-serif text-3xl font-extrabold text-white">{title}</h1>
    </div>
  </header>
)

export const Section = ({ children }: SectionProps) => (
  <section className="bg-surface p-6 rounded-2xl">
    {children}
  </section>
);

export const Main = ({children, pullUp}: {children: React.ReactNode, pullUp?: boolean}) => (
  <div className="relative z-[1] md:p-6 bg-background max-lg:pb-[6.5rem]">
    <div className={clsx("relative flex flex-col gap-2 md:gap-6 max-md:mt-2", pullUp && "max-lg:-top-4 max-lg:-mb-4")}>
      {children}
    </div>
  </div>
)