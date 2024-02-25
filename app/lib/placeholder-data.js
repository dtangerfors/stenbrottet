// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    user_color: '#17412d',
  },
  {
    id: '6b695b3e-9e9c-42ac-a8cd-6bdf9c8503e6',
    name: 'Lena Nyström',
    email: 'lena@nystrom.se',
    password: '123456',
    user_color: '#d88c9a',
  },
  {
    id: '00e5ea9c-803e-4665-9a74-b84f3336bdf5',
    name: 'Håkan Tängerfors',
    email: 'ht@webbart.nu',
    password: '123456',
    user_color: '#8dc8d8',
  },
  {
    id: 'a0048eb1-972e-4072-abe0-9141e43aac44',
    name: 'Anders Segerblad Nyström',
    email: 'anders@nystrom.se',
    password: '123456',
    user_color: '#d4d88d',
  },
  {
    id: '8b564bfd-869e-4876-864c-2d2b1ea95d6c',
    name: 'Daniel Tängerfors',
    email: 'daniel@dtangerfors.se',
    password: '123456',
    user_color: '#8dc8d8',
  },
];

const bookings = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    arrival: 1631318400000,
    departure: 1632528000000,
    guests: "6",
    message: "Vi blir 5 vuxna å en Milva  och en hund under v37 därefter 2 personer",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1657048906,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ],
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomKerstins",
        "Kerstins"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    arrival: 1660262400000,
    departure: 1661040000000,
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1657048906,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ]
    ],
    updated_at: 1660034405657
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    arrival: 1664323200000,
    departure: 1665014400000,
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1660137863046,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ]
    ],
    updated_at: 1663689883500
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    arrival: 1684281600000,
    departure: 1684972800000,
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1680619964132,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ]
    ],
    updated_at: 1680619964132
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    arrival: 1690243200000,
    departure: 1690934400000,
    guests: "6",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1682350206800,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ],
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomKerstins",
        "Kerstins"
      ]
    ],
    updated_at: 1687411972923
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    arrival: 1693612800000,
    departure: 1694476800000,
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1691174845457,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ]
    ],
    updated_at: 1692362801353
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    arrival: 1697241600000,
    departure: 1698105600000,
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "00e5ea9c-803e-4665-9a74-b84f3336bdf5",
    created_at: 1696170032683,
    rooms: [
      [
        "roomBungetorp",
        "Bungetorp"
      ],
      [
        "roomKammaren",
        "Kammaren"
      ]
    ],
    updated_at: 1696170032683
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    arrival: 1658707200000,
    departure: 1659830400000,
    guests: "4",
    message: "1 barn",
    name: "Lena",
    user_id: "6b695b3e-9e9c-42ac-a8cd-6bdf9c8503e6",
    created_at: 1657048906,
    updated_at: 1657048906,
    rooms: [
      [
        "roomKerstins",
        "Kerstins"
      ]
    ],
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    arrival: 1683936000000,
    departure: 1684540800000,
    guests: "1",
    message: "Har med Nathalie och vår tik Jeminna",
    name: "Anders",
    user_id: "a0048eb1-972e-4072-abe0-9141e43aac44",
    created_at: 1675248260359,
    rooms: [
      [
        "roomStensbo",
        "Stensbo"
      ]
    ],
    updated_at: 1680167414961
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    arrival: 1655510400000,
    departure: 1656288000000,
    guests: "1",
    message: "",
    name: "Daniel Tängerfors",
    user_id: "8b564bfd-869e-4876-864c-2d2b1ea95d6c",
    created_at: 1657048906,
    rooms: [
      [
        "roomKerstins",
        "Kerstins"
      ]
    ],
    updated_at: 1658175005090
  }
]

module.exports = {
  users,
  bookings
};
