"use client"

import { Booking } from "@/app/lib/definitions";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Tooltip} from "@nextui-org/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { showNiceDates } from "@/app/lib/functions";

export function CancelBooking({booking} : {booking: Booking}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="inline-block rounded-full p-1 text-warning-700 hover:text-warning-950"
        >
        <Tooltip content="Avboka">
          <XCircleIcon width={24}/>
        </Tooltip>
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Avboka resa {showNiceDates(booking.travel_dates)}</ModalHeader>
              <ModalBody>
                <p>Genom att avboka tas bort bokning bort ur systemet. Du kan fortfarande se den på din profil, men den kan inte återupptas.</p>
              </ModalBody>
              <ModalFooter>
                <button className="btn-tertiary btn-sm" onClick={onClose}>Avbryt</button>
                <button className="btn-primary btn-sm" onClick={onClose}>Avboka</button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}