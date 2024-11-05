type SectionProps = {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => (
  <section className="bg-surface p-6 rounded-2xl">
    {children}
  </section>
);

export const Main = ({children}: {children: React.ReactNode}) => (
  <div className="relative z-[1] md:p-6 bg-background">
    <div className="relative flex flex-col gap-2 md:gap-6 max-md:-top-4">
      {children}
    </div>
  </div>
)