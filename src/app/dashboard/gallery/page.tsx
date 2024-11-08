import { getDeviceType } from "@/lib/utils";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { GalleryItem } from "./gallery-item";
import imageData from "./image-data.json";
import { Hero, Main } from "@/components/dashboard/sections";

export default async function Gallery() {
  const { isMobile } = getDeviceType();

  return (
    <>
      {isMobile && <FixedHeader label="Galleri" invisibleFromStart />}
      <Hero title="Galleri" />
      <Main>
        <div className="grid gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {imageData.galleries.map(gallery => <GalleryItem key={`gallery-${gallery.id}`} gallery={gallery} />)}
        </div>
      </Main>
    </>
  );
}
