import { fetchBookingById } from "@/lib/data";
import { UpdateBookingForm } from "@/components/forms";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id; 
  const [booking] = await Promise.all([
    fetchBookingById(id)
  ])
  
  return (
    <div>
      <UpdateBookingForm booking={booking} />
    </div>
  );
}