"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { GalleryProps } from "@/lib/definitions";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

export function GalleryItem({ gallery }: { gallery: GalleryProps }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <button
        className="relative rounded-2xl flex flex-row-reverse sm:flex-col justify-between items-start p-2 sm:p-4 bg-white"
        tabIndex={0}
        onClick={onOpen}
      >
        <figure className="relative aspect-[3/2] w-24 sm:w-full rounded-lg sm:rounded-md overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={gallery.images[0].src}
            width={500}
            height={500}
            alt="Bild"
          />
          <ArrowsPointingOutIcon className="absolute bottom-1.5 sm:bottom-4 right-1.5 sm:right-4 w-4 text-white" />
        </figure>
        <div className="text-left sm:pt-4 max-sm:pl-2">
            <h2 className="font-serif text-lg font-semibold text-primary-900">
              {gallery.name}
            </h2>
            <p className="font-sans text-xs font-medium uppercase text-primary-900/80">
              {gallery.images.length} bilder
            </p>
        </div>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="font-serif text-2xl font-semibold text-primary">
                  {gallery.name}
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="px-6 max-w-screen-md mx-auto">
                  <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={12}
                    className="gallery-main-slider mb-6"
                  >
                    {gallery.images.map((image, i) => (
                      <SwiperSlide key={`${gallery.name}-${i}`}>
                        <figure className="w-full aspect-[4/3] rounded overflow-hidden">
                          <Image
                            src={image.src}
                            alt={gallery.name}
                            width={image.width}
                            height={image.height}
                            className="w-full h-full object-cover"
                          />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    modules={[Thumbs]}
                    slidesPerView={5}
                    spaceBetween={6}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                  >
                    {gallery.images.map((image, i) => (
                      <SwiperSlide key={`${gallery.name}-${i}`}>
                        <figure className="w-full aspect-square rounded overflow-hidden">
                          <Image
                            src={image.src}
                            alt={gallery.name}
                            width={image.width}
                            height={image.height}
                            className="w-full h-full object-cover"
                          />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
