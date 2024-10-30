"use server";

import { BookingFormValues, UpdateUserForm } from "./definitions";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const TravelDates = z.object({
  start: z.string(),
  end: z.string(),
})

const BookingSchema = z.object({
  id: z.string(),
  name: z.string(),
  guests: z.coerce.number(),
  guests_children: z.coerce.number(),
  travel_dates: TravelDates,
  rooms: z.string().array(),
  message: z.string(),
  user_id: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
})

const CreateBooking = BookingSchema.omit({id: true, created_at: true, updated_at: true });
const UpdateBooking = BookingSchema.omit({created_at: true, updated_at: true, user_id: true });

export async function createBooking(data: BookingFormValues) {
  const {name, guests, guests_children, travel_dates, rooms, user_id, message} = CreateBooking.parse({
    name: data.name,
    guests: data.guests,
    guests_children: data.guests_children,
    travel_dates: data.travel_dates,
    rooms: data.rooms,
    user_id: data.user_id,
    message: data.message
  });

  const roomsJsonb = JSON.stringify(rooms).replace("[", "{").replace("]", "}");
  const travelDates = JSON.stringify(travel_dates);
  const created_at = Date.now();
  const updated_at = Date.now();

  await sql`
    INSERT INTO bookings (created_at, updated_at, user_id, name, travel_dates, guests, guests_children, rooms, message)
    VALUES (${created_at}, ${updated_at}, ${user_id}, ${name}, ${travelDates}, ${guests}, ${guests_children}, ${roomsJsonb}, ${message})    
  `

  revalidatePath('/app/profile');
  redirect('/app/profile');
}

export async function updateBooking(data: BookingFormValues) {
  const {name, guests, guests_children, travel_dates, rooms, message, id} = UpdateBooking.parse({
    name: data.name,
    guests: data.guests,
    guests_children: data.guests_children,
    travel_dates: data.travel_dates,
    rooms: data.rooms,
    message: data.message,
    id: data.id
  });

  const roomsJsonb = JSON.stringify(rooms).replace("[", "{").replace("]", "}");
  const travelDates = JSON.stringify(travel_dates);
  const updated_at = Date.now();

  await sql`
    UPDATE bookings
    SET name = ${name}, guests = ${guests}, guests_children = ${guests_children}, travel_dates = ${travelDates}, rooms = ${roomsJsonb}, message = ${message}, updated_at = ${updated_at}
    WHERE id = ${id}
    `

  revalidatePath('/app/profile');
  redirect('/app/profile');
}

export async function updateUserData(data:UpdateUserForm) {
  await sql`
    UPDATE users
    SET user_role = ${data.user_role}
    WHERE id = ${data.id}
  `
  revalidatePath('/app/admin');
}

export async function cancelBooking(id: string) {

  try {
    await sql`
    UPDATE bookings
    SET is_canceled = true
    WHERE id = ${id}
  `;
    revalidatePath('/app/profile');
    return { message: 'Bokning avbokad' };
  } catch (error) {
    return { message: 'Database Error: Failed to cancel booking.' };
  }
}