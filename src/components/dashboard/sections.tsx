import clsx from "clsx";
import { Typography } from "../typography";

type SectionProps = {
  children: React.ReactNode;
}

export const Hero = ({ title }: {title: string}) => (
  <header className="bg-primary pt-safe-top">
    <div className="p-6 h-52 max-lg:pb-10 flex items-end">
      <Typography level="h1" variant="l" color="text-secondary-100">{title}</Typography>
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