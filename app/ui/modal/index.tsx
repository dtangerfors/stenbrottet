"use client"
import { useAppContext } from "@/app/app/app-context";
import { BookingForm } from "@/app/form";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

export function ModalContainer() {
  const {isOpen, onClose, onOpenChange} = useAppContext();

  return (
    <>
      <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onClose={onClose} 
        onOpenChange={onOpenChange} 
        size="xl"
        className="m-0 rounded-b-none" 
        scrollBehavior="inside"
        isDismissable={false}
        >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <BookingForm />
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}