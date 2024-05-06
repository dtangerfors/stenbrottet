'use client';
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { GalleryProps } from '@/app/lib/definitions';
import { Transition, Dialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';

export function GalleryItem({ gallery }: { gallery: GalleryProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-3xl"
        tabIndex={0}
        onClick={openModal}
      >
        <figure className="aspect-[3/2] w-full">
          <Image
            className="h-full w-full object-cover"
            src={gallery.images[0].src}
            width={500}
            height={500}
            alt="Bild"
          />
        </figure>
        <div className="absolute bottom-0 left-0 z-10 w-full">
          <div className="relative z-10 bg-gradient-to-t from-black/80 to-black/0 p-4 pt-12">
            <h2 className="font-serif text-lg font-semibold text-white">
              {gallery.name}
            </h2>
            <p className="font-sans text-xs font-medium uppercase text-white">
              {gallery.images.length} bilder
            </p>
            <ArrowsPointingOutIcon className="absolute bottom-4 right-4 w-4 text-white" />
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75 backdrop-blur-lg" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full min-h-[80vh] transform overflow-hidden rounded-t-4xl bg-white text-left align-middle shadow-xl transition-all">
                  <header className="flex justify-between px-6 py-6">
                    <Dialog.Title className="font-serif text-2xl font-semibold text-primary">
                      {gallery.name}
                    </Dialog.Title>
                    <button onClick={closeModal} className="grid h-8 w-8 place-items-center rounded-full bg-gray-100">
                      <XMarkIcon className="w-6" />
                    </button>
                  </header>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
