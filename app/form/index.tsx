"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import {Input, Textarea, CheckboxGroup} from "@nextui-org/react";
import { ChippedCheckbox } from "./checkbox";

type FormValues = {
  name: string;
  guests: number;
  arrival: string;
  departure: string;
  message: string;
  user_id: string;
  rooms: any[];
  created_at: number;
  updated_at: number;
  key: string;
}

export function BookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input label="Namn" size="lg" radius="lg" {...register("name")} />
      <Input type="number" inputMode="tel" label="Antal gäster"  radius="lg" {...register("guests")} />
      <Input  label="Resedatum"  radius="lg" {...register("arrival")} />
      <CheckboxGroup orientation="horizontal">
        <ChippedCheckbox value="Bungetorp" />
        <ChippedCheckbox value="Kerstins" />
        <ChippedCheckbox value="Kammaren" />
        <ChippedCheckbox value="Stensbo" />

      </CheckboxGroup>
      <Textarea label="Meddelande" placeholder="Övrig information som kan vara bra att veta"  radius="lg" {...register("arrival")} />
    </form>
  )
}