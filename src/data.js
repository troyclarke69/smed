// import room1 from "./images/details-1.jpeg";
// import room2 from "./images/details-2.jpeg";
// import room3 from "./images/details-3.jpeg";
// import room4 from "./images/details-4.jpeg";
import img1 from "./images/u2-1.jpg";
import img2 from "./images/u2-2.jpg";
import img3 from "./images/u2-3.jpg";
import img4 from "./images/u2-4.jpg";
import img5 from "./images/beatles1.jpg";
import img6 from "./images/stones1.jpg";
// import img7 from "./images/room-7.jpeg";
// import img8 from "./images/room-8.jpeg";
// import img9 from "./images/room-9.jpeg";
// import img10 from "./images/room-10.jpeg";
// import img11 from "./images/room-11.jpeg";
// import img12 from "./images/room-12.jpeg";

export default [
  {
    _id: "5f4d",
    artistName: "U2",
    slug: "U2",
    bio: "Post-punk band",
    yrFormed: 1978,
    yrEnded: 0,
    isActive: 1,
    homeTown: "Dublin",
    homeCountry: "Ireland",
    featured: true,
    primary: false,
    genre: "Post-Punk",
    imageData: [
        {
            url: img1
        },
        {
            url: img2
        },
        {
            url: img3
        },
        {
            url: img4
        }              
    ]
  },
  {
    _id: "5f4t",
    artistName: "The Beatles",
    slug: "The-Beatles",
    bio: "One big band",
    yrFormed: 1960,
    yrEnded: 1970,
    isActive: 0,
    homeTown: "Liverpool",
    homeCountry: "England",
    featured: true,
    primary: false,
    genre: "Rock",
    imageData: [
        {
            url: img5
        }   
    ]
  },
  {
    _id: "5f4e",
    artistName: "The Rolling Stones",
    slug: "The-Rolling-Stones",
    bio: "Rock band",
    yrFormed: 1962,
    yrEnded: 0,
    isActive: 1,
    homeTown: "London",
    homeCountry: "England",
    featured: true,
    primary: false,
    genre: "Blues",
    imageData: [
        {
            url: img6
        }   
    ]
  }
];
