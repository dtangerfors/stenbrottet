"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowsPointingOutIcon } from "@heroicons/react/16/solid";
import { GalleryProps } from "@/lib/definitions";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Typography } from "@/components/typography";

export function GalleryItem({ gallery }: { gallery: GalleryProps }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <button
        className="relative rounded-2xl flex flex-row-reverse sm:flex-col justify-between items-start p-2 sm:p-4 bg-surface"
        tabIndex={0}
        onClick={onOpen}
      >
        <figure className="relative aspect-[3/2] w-1/3 sm:w-full rounded-lg sm:rounded-md overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={gallery.images[0].src}
            width={500}
            height={500}
            alt="Bild"
          />
          <ArrowsPointingOutIcon className="absolute bottom-1.5 sm:bottom-4 right-1.5 sm:right-4 w-4 text-white" />
        </figure>
        <div className="text-left max-sm:p-4 sm:pt-4">
            <h2 className="font-serif text-lg font-semibold text-foreground">
              {gallery.name}
            </h2>
            <p className="font-sans text-xs font-medium uppercase text-foreground-1">
              {gallery.images.length} bilder
            </p>
        </div>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" classNames={{ closeButton: "top-4 right-4"}}>
        <ModalContent className="pt-safe-top">
            <>
              <ModalHeader className="w-full px-6 mt-6">
                <div className="w-full max-w-screen-md mx-auto">
                  <Typography level="h2" variant="l" alignment="left">
                    {gallery.name}
                  </Typography>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="w-full max-w-screen-md mx-auto">
                  <Swiper
                    modules={[Thumbs, Navigation]}
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation
                    spaceBetween={12}
                    className="gallery-swiper !overflow-visible mb-6"
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
                    slidesPerView={6}
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
        </ModalContent>
      </Modal>
    </>
  );
}
