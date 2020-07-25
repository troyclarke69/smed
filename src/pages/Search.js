import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Container from '../components/ArtistsContainer';

const Search = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Music Artists">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Container />
    </>
  );
};

export default Search;
