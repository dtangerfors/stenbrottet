"use client"
import { useAppContext } from "@/app/dashboard/app-context";
import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";

export function ModalContainer() {
  const {isOpen, onClose, onOpenChange} = useAppContext();

  return (
    <>
      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        onOpenChange={onOpenChange} 
        size="full"
        backdrop="blur" 
        className="bg-transparent m-0 shadow-none border-none"
        classNames={{
          backdrop: "bg-white/80 backdrop-blur-lg",
          body: "py-6 px-4 w-full max-w-screen-sm m-auto",
          base: "h-svh max-h-none",
          header: "bg-offwhite border-b border-gray-100"
        }}
        scrollBehavior="inside"
        isDismissable={false}
        >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
            </ModalBody>
            
          </>
        </ModalContent>
      </Modal>
    </>
  );
}