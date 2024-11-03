import { getDeviceType } from "@/lib/utils";
import { promises as fs } from "fs";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { GalleryItem } from "./gallery-item";
import { GalleryProps } from "@/lib/definitions";

type FetchedData = {
  galleries: GalleryProps[];
}

export default async function Gallery() {
  const { isMobile } = getDeviceType();

  const file = await fs.readFile(process.cwd() + "/src/app/dashboard/gallery/image-data.json", "utf8");
  const data: FetchedData = JSON.parse(file);

  return (
    <>
      {isMobile && <FixedHeader label="Galleri" />}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {data.galleries.map(gallery => <GalleryItem key={`gallery-${gallery.id}`} gallery={gallery} />)}
      </div>
    </>
  );
}
