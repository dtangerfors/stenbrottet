import { fetchBookingById } from "@/lib/data";
import { UpdateBookingForm } from "@/components/forms";
import { Hero, Main } from "@/components/dashboard/sections";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id; 
  const [booking] = await Promise.all([
    fetchBookingById(id)
  ])
  
  return (
    <>
      <Hero title="Uppdatera bokning" />
      <Main>
        <div className="max-w-screen-sm w-full mx-auto bg-background rounded-t-2xl sm:p-6 overflow-y-auto">
          <UpdateBookingForm booking={booking} />
        </div>
      </Main>
    </>
  );
}