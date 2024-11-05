import { getDeviceType } from "@/lib/utils";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { GalleryItem } from "./gallery-item";
import { GalleryProps } from "@/lib/definitions";
import imageData from "./image-data.json";

type FetchedData = {
  galleries: GalleryProps[];
}

export default async function Gallery() {
  const { isMobile } = getDeviceType();

  return (
    <>
      {isMobile && <FixedHeader label="Galleri" />}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {imageData.galleries.map(gallery => <GalleryItem key={`gallery-${gallery.id}`} gallery={gallery} />)}
      </div>
    </>
  );
}
