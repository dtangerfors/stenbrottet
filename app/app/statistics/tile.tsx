export function Tile({ number, text }: { number: any; text: string }) {
  return (
  <div className="bg-secondary-100 p-3 flex flex-col text-center rounded-3xl dark:bg-secondary">
    <span className="font-serif font-extrabold text-4xl text-secondary-700 leading-none dark:text-secondary-800">
      {number}
    </span>
    <span className="font-sans text-xs font-bold leading-tight text-secondary-700 dark:text-secondary-800">{text}</span>
  </div>
  )
}