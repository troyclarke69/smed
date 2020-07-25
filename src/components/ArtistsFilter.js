import React from "react";
import { useContext } from "react";
import { ArtistContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const ArtistsFilter = ({ artists }) => {
  const context = useContext(ArtistContext);
  const {
    handleChange,
    genre,
    name,
  } = context;

  // get unique genres
  let genres = getUnique(artists, "genre");
  genres = ["~ All ~", ...genres];
  // map to jsx
  genres = genres.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search" />
      <form className="filter-form">

      <div className="form-group">
          <label htmlFor="artistName">artist name </label>
          <div className="size-inputs">
            <input
              type="string"
              name="artistName"
            //   value={minSize}
              onChange={handleChange}
              className="size-input"
            //   className="form-control"
            />
          </div>
        </div>

        {/* select genre */}
        <div className="form-group">
          <label htmlFor="genre">genre</label>
          <select
            name="genre"
            id="genre"
            onChange={handleChange}
            className="form-control"
            value={genre}
          >
            {genres}
          </select>
        </div>
        {/* end of select genre */}

        {/* SLIDER Ex. */}
        {/* <div className="form-group">
          <label htmlFor="artistName">Name {name}</label>
          <input
            type="range"
            name="name"
            min="1"
            max="26"
            id="price"
            value={name}
            onChange={handleChange}
            className="form-control"
          />
        </div> */}
        {/* end of room price */}

        {/* size NUMBER INPUT ex. */}
        {/* <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div> */}
        {/* end of select type */}

        {/* extras CHECKBOX ex. */}
        {/* <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div> */}
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default ArtistsFilter;
