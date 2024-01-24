// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const bookings = [
  {
    id: "-MalfVB5roQwPSJ9SR6g",
    arrival: "2021-09-11",
    departure: "2021-09-25",
    guests: "6",
    message: "Vi blir 5 vuxna å en Milva  och en hund under v37 därefter 2 personer",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-N38mCuXV0V3Fts_uTNk",
    arrival: "2022-08-12",
    departure: "2022-08-21",
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-N96vMk2lvcFGXxaKWRG",
    arrival: "2022-09-28",
    departure: "2022-10-06",
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-NSBkOn9cIJ2e5e4MMJy",
    arrival: "2023-05-17",
    departure: "2023-05-25",
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-NTnsjLkJfN0KbelqulH",
    arrival: "2023-07-25",
    departure: "2023-08-02",
    guests: "6",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-Nb0s3_BH7b0-GWxjoAX",
    arrival: "2023-09-02",
    departure: "2023-09-12",
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-Nffb9JuXIFpYY3b9Php",
    arrival: "2023-10-14",
    departure: "2023-10-24",
    guests: "2",
    message: "",
    name: "Håkan Tängerfors",
    user_id: "ASeKpKXMIaYRDWc89yHcbx30jSA2",
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
    id: "-N5TbLbOXT_y4wfzG24b",
    arrival: "2022-07-25",
    departure: "2022-08-07",
    guests: "4",
    message: "1 barn",
    name: "Lena",
    user_id: "Cd4bHUVrzgRK01Pzk5iNfVDBPcc2",
    created_at: 1657048906,
    updated_at: 1657048906
  },
  {
    id: "-NNBZxHon1mMMp8EYtj3",
    arrival: "2023-05-13",
    departure: "2023-05-20",
    guests: "1",
    message: "Har med Nathalie och vår tik Jeminna",
    name: "Anders",
    user_id: "Cd4bHUVrzgRK01Pzk5iNfVDBPcc2",
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
    id: "-N3x1SSm6L9Qd7x7qD3j",
    arrival: "2022-06-18",
    departure: "2022-06-27",
    guests: "1",
    message: "",
    name: "Daniel Tängerfors",
    user_id: "TCCBPXAAlaRx9KENOqbYITJ06X03",
    created_at: 1657048906,
    rooms: [
      [
        "roomKerstins",
        "Kerstins"
      ]
    ],
    updated_at: 1658175005090
  },
  {
    id: "-MdbQJFMzPw3gyvtfz2X",
    arrival: "2021-08-02",
    departure: "2021-08-08",
    guests: "5",
    message: "Hans med 3 barn plus Ludde ",
    name: "Hans",
    user_id: "irmhQs0CRkeJWN9UKwDw1TYtIQr2",
    created_at: 1657048906,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomStensbo",
        "Stensbo"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-N2ftNxYo7VVhmrhMNYn",
    arrival: "2022-07-02",
    departure: "2022-07-09",
    guests: "5",
    message: "",
    name: "Hans",
    user_id: "irmhQs0CRkeJWN9UKwDw1TYtIQr2",
    created_at: 1657048906,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomSivs",
        "Sivs"
      ],
      [
        "roomStensbo",
        "Stensbo"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-NSWnVjP1FdHemWPYnm2",
    arrival: "2023-07-02",
    departure: "2023-07-12",
    guests: "6",
    message: "",
    name: "Hasseboi",
    user_id: "irmhQs0CRkeJWN9UKwDw1TYtIQr2",
    created_at: 1680973106334,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomSivs",
        "Sivs"
      ],
      [
        "roomStensbo",
        "Stensbo"
      ]
    ],
    updated_at: 1686063912599
  },
  {
    id: "-MdxBFPazsM1MtuXdKr_",
    arrival: "2021-08-03",
    departure: "2021-08-18",
    guests: "1",
    message: "Lotta kommer ensam. Gösta o jag åker ner mitten september. Har ej bestämt datum än. ",
    name: "Lotta Nyström",
    user_id: "jLc1PzuVqPXB7FsdhVU6V7kV5d92",
    created_at: 1657048906,
    rooms: [
      [
        "roomVarat",
        "Vårat"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-MkB6BXc-MdV3wJTdfOY",
    arrival: "2021-08-28",
    departure: "2021-09-05",
    guests: "2",
    message: "",
    name: "Lena",
    user_id: "jLc1PzuVqPXB7FsdhVU6V7kV5d92",
    created_at: 1657048906,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-NZfDtAjgjzCBAXEepFc",
    arrival: "2023-07-28",
    departure: "2023-08-11",
    guests: "3",
    message: "Lotta kommer ner den 4/8 och stannar några dagar längre än oss.",
    name: "Lena Nyström",
    user_id: "jLc1PzuVqPXB7FsdhVU6V7kV5d92",
    created_at: 1688647471694,
    rooms: [
      [
        "roomSivs",
        "Sivs"
      ],
      [
        "roomVarat",
        "Vårat"
      ]
    ],
    updated_at: 1688647471694
  },
  {
    id: "-McdhJU9k-0vedwFX1dZ",
    arrival: "2021-07-17",
    departure: "2021-07-24",
    guests: "4",
    message: "Det är sonen Jonas som kommer ner",
    name: "Thomas Tängerfors",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1657048906,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomKerstins",
        "Kerstins"
      ],
      [
        "roomThomas",
        "Thomas"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-McdhYiSSCDi7rLHFH5Y",
    arrival: "2021-07-24",
    departure: "2021-08-01",
    guests: 1,
    message: "Ev stannar jag längre",
    name: "Thomas Tängerfors",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1657048906,
    rooms: [
      [
        "roomThomas",
        "Thomas"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-Mj_9pLu5w901W5aOuNd",
    arrival: "2021-10-01",
    departure: "2021-10-17",
    guests: "1",
    message: "",
    name: "Karl Thomas Tängerfors",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1657048906,
    rooms: [
      [
        "roomThomas",
        "Thomas"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-N2waMX_TNRHK-yafdE8",
    arrival: "2022-07-09",
    departure: "2022-07-24",
    guests: "3",
    message: "Emma Lisa Helena Alexander och Liam",
    name: "Thomas",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
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
      ],
      [
        "roomThomas",
        "Thomas"
      ]
    ],
    updated_at: 1657048906
  },
  {
    id: "-NAB3iWjluX7sk-vRUNn",
    arrival: "2022-08-30",
    departure: "2022-09-07",
    guests: "1",
    message: "",
    name: "Thomas",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1661281167521,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomNardkant",
        "Nårdkant"
      ]
    ],
    updated_at: 1661281167521
  },
  {
    id: "-NR-_-tnDEpRykzML6y8",
    arrival: "2023-07-14",
    departure: "2023-07-25",
    guests: "5",
    message: "Barn och barnbar",
    name: "Thomad",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1679341915787,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomKerstins",
        "Kerstins"
      ],
      [
        "roomNardkant",
        "Nårdkant"
      ]
    ],
    updated_at: 1683571455768
  },
  {
    id: "-NRXvGSI_irBYC1fzRRL",
    arrival: "2023-05-19",
    departure: "2023-05-21",
    guests: "1",
    message: "",
    name: "Thomas",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1679918176123,
    rooms: [
      [
        "roomNardkant",
        "Nårdkant"
      ]
    ],
    updated_at: 1681587909715
  },
  {
    id: "-NRXvu6uibnUfafaHkAO",
    arrival: "2023-09-18",
    departure: "2023-10-01",
    guests: "4",
    message: "Vi ska ner på jaktprov v38-39 så lite osäker på ankoms och avresa. Men jag är där v38-39",
    name: "Thomas",
    user_id: "k1VAUtDBGJbbM6fGi2ickYMbPdt1",
    created_at: 1679918342690,
    rooms: [
      [
        "roomKammaren",
        "Kammaren"
      ],
      [
        "roomKerstins",
        "Kerstins"
      ],
      [
        "roomNardkant",
        "Nårdkant"
      ]
    ],
    updated_at: 1679918342690
  }
]

module.exports = {
  users,
  bookings
};
