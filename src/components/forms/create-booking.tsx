"use client";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { parseDate } from "@internationalized/date";
import {
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Select,
  SelectItem,
  DateRangePicker
} from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";
import { rooms, guests } from "./form-options";
import { useAppContext } from "@/app/app/app-context";
import { BookingFormValues, User } from "../../lib/definitions";
import { createBooking } from "../../lib/actions";
import { formStyling } from "./styles";

export function CreateBookingForm({user}: {user: User}) {
  const {selectedDate} = useAppContext();

  const initialValues = {
    name: user.name,
    guests: "0",
    guests_children: "0",
    travel_dates: {
      start: parseDate(selectedDate),
      end: parseDate(selectedDate).add({weeks: 1}),
    },
    rooms: [],
    message: "",
    id: "",
    user_id: user.id,
    created_at: 0,
    updated_at: 0,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Vänligen ange ett namn"),
    guests: Yup.number().min(1, "Minst en person"),
    guests_children: Yup.number(),
    rooms: Yup.array().min(1, "Välj minst ett rum"),
    message: Yup.string(),
    user_id: Yup.string(),
  });

  const onSubmit = (values: BookingFormValues) => {
    values.travel_dates.start = values.travel_dates.start.toString();
    values.travel_dates.end = values.travel_dates.end.toString();

    const data = JSON.parse(JSON.stringify(values))
    createBooking(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="flex flex-col gap-4">
          <Field name="name">
            {({ field }: {field: FieldProps["field"]}) => (
              <Input
                {...field}
                label="Namn"
                size="lg"
                radius="lg"
                classNames={formStyling.input}
                isInvalid={!errors.name || !touched.name ? false : true}
                errorMessage={errors.name}
              />
            )}
          </Field>

          <div className="bg-white border border-gray-200 shadow-xl shadow-gray-700/10 p-3 rounded-large">
            <p className="relative text-medium text-foreground-500">Vem följer med?</p>

            <div className="divide-y divide-gray-200">
              <Field name="guests">
                {({ field }: {field: FieldProps["field"]}) => (
                  <Select 
                    label="Vuxna" 
                    {...field} 
                    selectedKeys={[field.value]} 
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFieldValue(field.name, e.target.value)}
                    labelPlacement="outside-left" 
                    classNames={formStyling.select}
                    isInvalid={!errors.guests || !touched.guests ? false : true}
                    errorMessage={errors.guests}
                  >
                    {guests.map(guest => <SelectItem key={guest.key}>{guest.label}</SelectItem>)}
                  </Select>
                )}
              </Field>

              <Field name="guests_children">
                {({ field }: {field: FieldProps["field"]}) => (
                  <Select 
                    label="Barn (Upp till tolv år)" 
                    {...field} 
                    selectedKeys={[field.value]} 
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFieldValue(field.name, e.target.value)}
                    labelPlacement="outside-left" 
                    classNames={formStyling.select}>
                  {guests.map(guest => <SelectItem key={guest.key}>{guest.label}</SelectItem>)}
                </Select>
                )}
              </Field>
              
            </div>
          </div>

          <Field name="travel_dates">
            {({ field }: {field: FieldProps["field"]}) => (
              <I18nProvider locale="sv-SE">
                <DateRangePicker
                  {...field}
                  value={values.travel_dates}
                  onChange={(newValues) => setFieldValue(field.name, newValues)}
                  label="Resedatum"
                  size="lg"
                  className="*:border *:border-gray-200 *:bg-white *:shadow-xl *:shadow-gray-700/10 *:hover:bg-default-50"
                  classNames={formStyling.calendar}
                    />
              </I18nProvider>
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
                isInvalid={!errors.rooms || !touched.rooms ? false : true}
                errorMessage={errors.rooms}
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
                classNames={formStyling.input}
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
