'use client';

import { Colors, UpdateUserForm, User } from '@/lib/definitions';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tooltip,
} from '@nextui-org/react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { Select, SelectItem } from '@nextui-org/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { updateUserData } from '@/lib/actions';
import { formStyling } from '../forms/styles';
import clsx from "clsx";

export const roles = [
  { key: 'super_admin', label: 'Super Admin' },
  { key: 'admin', label: 'Admin' },
  { key: 'moderator', label: 'Moderator' },
  { key: 'user', label: 'User' },
];

export const colors = [
  { key: Colors[Colors.sun], label: 'Sol' },
  { key: Colors[Colors.sky], label: 'Himmel' },
  { key: Colors[Colors.coral], label: 'Korall' },
]

export function UpdateUser({ user }: { user: User }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const initialValues = {
    user_role: user.user_role,
    user_color: user.user_color,
    id: user.id,
  };

  const onSubmit = (values: UpdateUserForm) => {
    const data = JSON.parse(JSON.stringify(values));
    updateUserData(data);
    onClose();
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="inline-block rounded-full p-1 text-foreground-1 hover:text-foreground"
      >
        <Tooltip content="Ändra användarroll">
          <PencilSquareIcon width={24} />
        </Tooltip>
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ setFieldValue }) => (
                <Form>
                  <ModalHeader className="flex flex-col gap-1">
                    Ändra användare
                  </ModalHeader>
                  <ModalBody className="w-full">
                    <Field name="user_role">
                      {({ field }: { field: FieldProps['field'] }) => (
                        <Select
                          label="Användarroll"
                          {...field}
                          selectedKeys={[field.value]}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setFieldValue(field.name, e.target.value)
                          }
                          classNames={formStyling.select_lg}
                        >
                          {roles.map((role) => (
                            <SelectItem key={role.key}>{role.label}</SelectItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                    <Field name="user_color">
                      {({ field }: { field: FieldProps['field'] }) => (
                        <Select
                          label="Färg"
                          {...field}
                          selectedKeys={[field.value]}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setFieldValue(field.name, e.target.value)
                          }
                          classNames={formStyling.select_lg}
                        >
                          {colors.map((color) => (
                            <SelectItem key={color.key} textValue={color.label}>
                              <div className="flex gap-4 items-center">
                                <span className={clsx("block size-4 rounded-full overflow-hidden border-gray-100 border-1", `bg-${user.user_color}`)}></span>
                                {color.label}
                              </div>
                              </SelectItem>
                          ))}
                        </Select>
                      )}
                    </Field>
                  </ModalBody>
                  <ModalFooter>
                    <button
                      type="button"
                      className="btn-secondary btn-sm"
                      onClick={onClose}
                    >
                      Avbryt
                    </button>
                    <button type="submit" className="btn-primary btn-sm">
                      Uppdatera
                    </button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
