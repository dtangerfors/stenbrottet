import { fetchBookingById } from "@/lib/data";
import { UpdateBookingForm } from "@/components/forms";
import { Main } from "@/components/dashboard/sections";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id; 
  const [booking] = await Promise.all([
    fetchBookingById(id)
  ])
  
  return (
    <Main>
      <UpdateBookingForm booking={booking} />
    </Main>
  );
}