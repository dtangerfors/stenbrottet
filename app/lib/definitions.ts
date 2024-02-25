// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type Booking = {
  id: string,
  arrival: string,
  departure: string,
  guests: number,
  message: string,
  name: string,
  user_id: string,
  created_at: string,
  updated_at: string,
  rooms: [],
  user_color: string,
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