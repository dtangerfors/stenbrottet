const { db } = require('@vercel/postgres');
const { bookings, users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        user_color VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password, user_color)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.user_color})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedBookings(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "bookings" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at BIGINT NOT NULL,
    updated_at BIGINT NOT NULL,
    user_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    travel_dates JSONB NOT NULL,
    guests INTEGER NOT NULL,
    guests_children INTEGER,
    rooms text[],
    message TEXT
  );
`;

    console.log(`Created "bookings" table`);

    // Insert data into the "bookings" table
    const insertedBookings = await Promise.all(
      bookings.map(
        (booking) => {
          const roomsJsonb = JSON.stringify(booking.rooms).replace("[", "{").replace("]", "}");
          const travel_dates = JSON.stringify(booking.travelDates);

          return client.sql`
        INSERT INTO bookings (id, created_at, updated_at, user_id, name, travel_dates, guests, guests_children, rooms, message)
        VALUES (${booking.key}, ${booking.created_at}, ${booking.updated_at}, ${booking.user_id}, ${booking.name}, ${travel_dates}, ${booking.guests}, ${booking.guestsChildren}, ${roomsJsonb}, ${booking.message})
        ON CONFLICT (id) DO NOTHING;
      `},
      ),
    );

    console.log(`Seeded ${insertedBookings.length} bookings`);

    return {
      createTable,
      invoices: insertedBookings,
    };
  } catch (error) {
    console.error('Error seeding bookings:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  await seedBookings(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
