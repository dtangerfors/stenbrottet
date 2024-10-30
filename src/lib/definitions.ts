// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { DateValue } from "@nextui-org/react";

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  user_color: string;
  user_role: string;
};

export type UpdateUserForm = {
  user_role: string;
  id: string;
}

export type BookingFormValues = {
  name: string;
  guests: string;
  guests_children: string;
  travel_dates: {
    start: DateValue | string,
    end: DateValue | string
  },
  message: string;
  user_id: string;
  rooms: string[];
  id: string;
  created_at: number;
  updated_at: number;
}

export type Booking = {
  name: string;
  guests: number;
  guests_children: number;
  travel_dates: {
    start: string,
    end: string
  },
  message: string;
  user_id: string;
  rooms: string[];
  created_at: number;
  updated_at: number;
  user_color: string;
  id: string;
  is_canceled: boolean;
}

export type BookingEvent = {
  title: string;
  start: Date;
  end: Date;
} & Booking


export type SortedBooking = {
  [year: number]: Booking[];
}

export type InfoPost = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {rendered: string;};
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {rendered: string;};
  content: {rendered: string; protected: boolean;};
  excerpt: {rendered: string; protected: boolean;};
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: { inline_featured_image: boolean, footnotes: string };
  categories: number[];
  tags: number[];
  _links: {
    self: [],
    collection: [],
    about: [],
    author: [],
    replies: [],
    'version-history': [],
    'predecessor-version': [],
    'wp:attachment': [],
    'wp:term': [],
    curies: []
  }
}

export type ImageProps = {
  src: string;
  width: number;
  height: number;
}

export type GalleryProps = {
  id: string;
  name: string;
  images: ImageProps[];
}