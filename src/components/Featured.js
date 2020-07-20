import React, { Component } from "react";
import Title from "./Title";
import { ArtistContext } from "../context";
import Artist from "./Artist";
import Loading from "./Loading";

export default class Featured extends Component {
  static contextType = ArtistContext;

  render() {
    let { loading, featuredArtists: artists } = this.context;

    artists = artists.map(artist => {
      return <Artist key={artist._id} artist={artist} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured artists" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : artists}
        </div>
      </section>
    );
  }
}
