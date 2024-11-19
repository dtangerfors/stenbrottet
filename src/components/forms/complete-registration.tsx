"use client"

import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
import { Claims } from "@auth0/nextjs-auth0";
import { formStyling } from "./styles";
import { CompleteRegistrationFormValues } from "@/lib/definitions";
import { createUser } from "@/lib/actions";

export function CompleteRegistration({user}: {user: Claims}) {

  const initialValues = {
    given_name: user.given_name as string || "",
    family_name: user.family_name as string || "",
    uuid: user.app_user_id as string,
    email: user.email as string,
  }

  const validationSchema = Yup.object({
    given_name: Yup.string().required("Vänligen ange ditt förnamn"),
    family_name: Yup.string().required("Vänligen ange ditt efternamn"),
  });

  const onSubmit = (values: CompleteRegistrationFormValues) => {

    const data = JSON.parse(JSON.stringify(values))
    createUser(data);
  };

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
     {({ errors, touched }) => (
      <Form className="flex flex-col gap-2">
        <Field name="given_name">
            {({ field }: {field: FieldProps["field"]}) => (
              <Input
                {...field}
                label="Förnamn"
                size="lg"
                radius="lg"
                variant="bordered"
                classNames={formStyling.input}
                isInvalid={!errors.given_name || !touched.given_name ? false : true}
                errorMessage={errors.given_name}
              />
            )}
          </Field>

          <Field name="family_name">
            {({ field }: {field: FieldProps["field"]}) => (
              <Input
                {...field}
                label="Efternamn"
                size="lg"
                radius="lg"
                variant="bordered"
                classNames={formStyling.input}
                isInvalid={!errors.family_name || !touched.family_name ? false : true}
                errorMessage={errors.family_name}
              />
            )}
          </Field>

          <div className="pb-safe-bottom">
            <button type="submit" className="inline-block w-full bg-secondary-500 text-white rounded-2xl py-4 px-8 hover:bg-secondary-600 transition-all">
              <span>Fortsätt</span>
            </button>
          </div>
      </Form>
     )}
  </Formik>
  )
}