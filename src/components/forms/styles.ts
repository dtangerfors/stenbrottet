const input = {
  innerWrapper: "bg-transparent",
  inputWrapper: "bg-surface shadow-none max-sm:px-6 max-sm:rounded-2xl",
};

const calendar = {
  calendar: "bg-surface",
  gridHeader: "shadow-none border-b border-gray-200",
  separator: "mx-0",
  inputWrapper: "bg-surface shadow-none max-sm:px-6 max-sm:rounded-2xl"
}

const select = {
  base: "items-center mb-4 pt-4 last:mb-0",
  label: "flex-1",
  mainWrapper: "w-24",
  inputWrapper: "shadow-none",
  trigger: "bg-gray-50 data-[hover=true]:bg-gray-100 dark:bg-gray-800 data-[hover=true]:dark:bg-gray-700",
  value: "!text-foreground"
}

const select_lg = {
  base: "items-center mb-4 pt-4 last:mb-0",
  label: "flex-1",
  trigger: "bg-gray-50 data-[hover=true]:bg-gray-100 dark:bg-gray-800 data-[hover=true]:dark:bg-gray-700"
}

export const formStyling = {
  input: input,
  calendar: calendar,
  select: select,
  select_lg: select_lg,
}