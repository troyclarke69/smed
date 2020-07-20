import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/artists.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const Artist = memo(({ artist }) => {
  const { artistName, slug, images } = artist;
  console.log(artistName);

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="" />
       
        <Link to={`/artists/${slug}`} className="btn-primary room-link">
          Info
        </Link>
      </div>
      <p className="room-info">{artistName}</p>
    </article>
  );
});

Artist.propTypes = {
  artist: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
export default Artist;
