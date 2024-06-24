"use client";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import { parseDate } from "@internationalized/date";
import {
  Input,
  Textarea,
  Checkbox,
  DatePicker,
  DateValue,
  CheckboxGroup,
} from "@nextui-org/react";
import { rooms } from "./rooms";
import { useAppContext } from "@/app/app/app-context";

interface FormValues {
  name: string;
  guests: string;
  arrival: DateValue;
  departure: DateValue;
  message: string;
  user_id: string;
  rooms: string[];
  created_at: number;
  updated_at: number;
  key: string;
}

const inputStyling = {
  innerWrapper: "bg-transparent",
  inputWrapper: "bg-white border border-gray-200 shadow-xl shadow-gray-700/10 data-[hover=true]:bg-default-50",
};

export function BookingForm() {
  const {selectedDate} = useAppContext();

  const initialValues = {
    name: "Daniel Tängerfors",
    guests: "1",
    arrival: parseDate(selectedDate),
    departure: parseDate(selectedDate).add({weeks: 1}),
    rooms: ["room-4"],
    message: "",
    created_at: 1,
    updated_at: 1,
    key: "",
    user_id: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Vänligen ange ett namn"),
    guests: Yup.string().required("Minst en person"),
    arrival: Yup.date(),
    departure: Yup.date(),
    rooms: Yup.array().min(1, "Välj minst ett rum"),
    message: Yup.string(),
    created_at: Yup.number(),
    updated_at: Yup.number(),
    key: Yup.string(),
    user_id: Yup.string(),
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-4">
          <Field name="name">
            {({ field }: {field: FieldProps["field"]}) => (
              <Input
                {...field}
                label="Namn"
                size="lg"
                radius="lg"
                classNames={inputStyling}
              />
            )}
          </Field>

          <Field name="guests">
            {({ field }: {field: FieldProps["field"]}) => (
              <Input
                {...field}
                type="number"
                inputMode="tel"
                label="Antal gäster"
                size="lg"
                radius="lg"
                classNames={inputStyling}
              />
            )}
          </Field>

          <Field name="arrival">
            {({ field }: {field: FieldProps["field"]}) => (
              <DatePicker
                {...field}
                value={values.arrival}
                onChange={(newValues) => setFieldValue(field.name, newValues)}
                label="Ankomst"
                size="lg"
                className="*:border *:border-gray-200 *:bg-white *:shadow-xl *:shadow-gray-700/10 *:hover:bg-default-50"
              />
            )}
          </Field>

          <Field name="departure">
            {({ field }: {field: FieldProps["field"]}) => (
              <DatePicker
                {...field}
                value={values.departure}
                onChange={(newValues) => setFieldValue(field.name, newValues)}
                label="Avfärd"
                size="lg"
                className="*:border *:border-gray-200 *:bg-white *:shadow-xl *:shadow-gray-700/10 *:hover:bg-default-50"
              />
            )}
          </Field>

          <Field name="rooms">
            {({ field }: {field: FieldProps["field"]}) => (
              <CheckboxGroup
                value={values.rooms}
                onChange={(newValues) => setFieldValue(field.name, newValues)}
                label={"Välj rum"}
                orientation="horizontal"
                className={"rounded-large border border-gray-200 bg-white p-3 shadow-xl shadow-gray-700/10"}
                classNames={{
                  wrapper: "grid grid-cols-2 gap-x-4 sm:grid-cols-3"
                }}
              >
                {rooms.map((room) => (
                  <Checkbox
                    key={room.id}
                    value={room.id}
                    radius={"lg"}
                    size={"md"}
                    color={"secondary"}
                  >
                    <span className="leading-none">{room.value}</span>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            )}
          </Field>

          <Field name="message">
            {({ field }: {field: FieldProps["field"]}) => (
              <Textarea
                {...field}
                label="Meddelande"
                placeholder="Övrig information som kan vara bra att veta"
                size="lg"
                radius="lg"
                classNames={inputStyling}
              />
            )}
          </Field>
          
          <button type="submit" className="btn-primary btn-lg">
            <span>Lägg in bokning</span>
          </button>
        </Form>
      )}
    </Formik>
  );
}
