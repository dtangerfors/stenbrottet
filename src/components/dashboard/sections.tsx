import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  bgColor?: string;
  pt?: "small" | "default";
}

export const Section = ({ children, bgColor, pt = "default" }: SectionProps) => (
  <section className={clsx(
    "relative z-[2] rounded-t-4xl", 
    "max-lg:-mt-8 max-lg:px-6 pb-20 last:pb-6",
    (pt === "default" ? "pt-6" : "pt-3"),
    (bgColor ? bgColor : "bg-offwhite dark:bg-black")
    )}>
    {children}
  </section>
);
