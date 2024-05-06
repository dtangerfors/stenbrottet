import { Checkbox, cn } from "@nextui-org/react";

type CheckboxProps = {
  value: string;
}

export function ChippedCheckbox({value}: CheckboxProps) {
  return (
    <Checkbox
      radius="full"
      size="md"
      color="secondary"
      className="p-2 m-0 pr-5 items-center rounded-full bg-gray-50 hover:bg-gray-100"
    >
      <span className="leading-none">{value}</span>
    </Checkbox>
  )
}