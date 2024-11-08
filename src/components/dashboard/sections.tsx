type SectionProps = {
  children: React.ReactNode;
}

export const Hero = ({ title }: {title: string}) => (
  <header className="bg-primary rounded-b-2xl lg:rounded-none p-6 h-44 flex items-center lg:items-end">
    <h1 className="font-serif text-3xl font-extrabold text-white">{title}</h1>
  </header>
)

export const Section = ({ children }: SectionProps) => (
  <section className="bg-surface p-6 rounded-2xl">
    {children}
  </section>
);

export const Main = ({children}: {children: React.ReactNode}) => (
  <div className="relative z-[1] md:p-6 bg-background max:lg:pb-[6.5rem]">
    <div className="relative flex flex-col gap-2 md:gap-6 max-md:mt-2">
      {children}
    </div>
  </div>
)