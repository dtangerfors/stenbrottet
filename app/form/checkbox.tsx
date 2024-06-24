import { Checkbox, cn } from "@nextui-org/react";

type CheckboxProps = {
  value: string;
  label: string;
  name: string;
}

export function ChippedCheckbox({value, label, name}: CheckboxProps) {
  return (
    <Checkbox
      name={name}
      value={value}
      radius="full"
      size="md"
      color="secondary"
      className="p-1 m-0 pl-1.5 pr-4 items-center leading-none rounded-full bg-gray-50 hover:bg-gray-100"
    >
      <span className="leading-none">{label}</span>
    </Checkbox>
  )
}