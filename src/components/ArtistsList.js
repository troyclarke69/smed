import React from "react";
import Artist from "./Artist";

const ArtistsList = ({ artists }) => {
  if (artists.length === 0) {
    return (
      <div className="empty-search">
        <h3>nothing matched your search. try again.</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {artists.map(item => {
          return <Artist key={item.id} artist={item} />;
        })}
      </div>
    </section>
  );
};

export default ArtistsList;
