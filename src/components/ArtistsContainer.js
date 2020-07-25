import React from "react";
import { withArtistConsumer } from "../context";
import Loading from "./Loading";
import ArtistsFilter from "./ArtistsFilter";
import ArtistsList from "./ArtistsList";

function ArtistsContainer({ context }) {
  const { loading, sortedArtists, artists } = context;
  
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ArtistsFilter artists={artists} />
      <ArtistsList artists={sortedArtists} />
    </>
  );
}

export default withArtistConsumer(ArtistsContainer);


// BELOW SHOWS ALTERNATE METHOD FOR USING CONSUMER ... THIS IS DONE IN CONTEXT.JS INSTEAD !!! HIGHER ORDER COMPONENT

// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, setRoom, sortedRooms,rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} setRoom={setRoom} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
