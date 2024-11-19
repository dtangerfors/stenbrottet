import clsx from "clsx";

export function Tile({ number, text, icon }: { number: string | number; text: string, icon: React.ReactNode }) {
  return (
    <div className={clsx("flex @2xl:flex-col rounded-lg @2xl:rounded-2xl bg-surface p-3 border border-foreground-2 @2xl:border-none")}>
      <div className="flex items-center gap-3 p-3">
        <span className="inline-block size-6 *:stroke-foreground-1">{icon}</span>
        <span className="font-sans text-base font-medium leading-tight text-foreground-1">{text}</span>
      </div>
      <div className="grid place-items-center size-14 @2xl:size-auto bg-secondary-100 dark:bg-secondary-900 p-3 @2xl:py-6 ml-auto @2xl:m-[auto_0_0_0] text-center rounded @2xl:rounded-lg">
        <span className="font-serif font-extrabold text-2xl @2xl:text-4xl text-secondary dark:text-secondary-500 leading-none">
          {number}
        </span>
      </div>
    </div>
  )
}