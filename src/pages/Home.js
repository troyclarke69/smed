import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import Services from "../components/Services";
import Featured from "../components/Featured";


const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Wikirepo"
          subtitle="Musical Artist Search Engine"
        >
          <Link to="/artist" className="btn-primary">
            Find Something
          </Link>
        </Banner>
      </Hero>
      {/* <Services /> */}
      <Featured />
      {/* <Container /> */}
    </>
  );
};

export default home;
