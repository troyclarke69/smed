import React, { Component } from "react";
import defaultBcg from "../images/artists.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ArtistContext } from "../context";
import StyledHero from "../components/StyledHero";
import Tabs from '../components/Tabs';

export default class Artist extends Component {
  // to access the params, use constructor - props passed by react-router
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  //API call
  // componentDidMount() {console.log(this.props)}

  static contextType = ArtistContext;

  render() {
    const { getArtist } = this.context;
    const artist = getArtist(this.state.slug);

    //** Note: may want 'loading' here if calling from API */
    if (!artist) {
      return (
        <div className="error">
          <h3> We could not find the artist ...</h3>
          <Link to="/artist" className="btn-primary">
            Back to Search
          </Link>
        </div>
      );
    }
    const {
      artistName,
      bio,
      yrFormed,
      yrEnded,
      homeTown,
      homeCountry,
      images,
      musicianData
    } = artist;

    // mainImg = index[0]
    const [mainImg, ...defaultImages] = images;
    // console.log('images', defaultImages);
    // const [musicianName, ...musicians] = musicianData;
    // console.log('musicianData', musicianData);
    // const [musician] = musicianData;
    // console.log('musicianData', musician);

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${artistName}`}>
            <Link to="/artist" className="btn-primary">
              back to search
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          {/* <div className="single-room-images"> */}
          <div>
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={artistName} />
            ))}
          {/* </div> */}

            <Tabs>
              <div label="info">
                <div>{bio}</div>
                {/* <h1></h1> */}
                <div>Home Base: {homeTown}, {homeCountry}</div>
                <div>Formed: {yrFormed}</div>
                { yrEnded === 0 ? <p>Still Active</p> : <p>Dismantled: {yrEnded}</p>}
              </div>
              <div label="members">
                {musicianData.map((item) => (
                  // <img key={index} src={item} alt={item.musicianName} />
                  <div key={item.id}>
                    <h4>{item.musicianName}</h4>
                    <small>{item.bio}</small>
                  </div>
              ))}
              </div>
              <div label="albums">
                <div>Coming soon ...</div>
              </div>
            </Tabs>
          </div>

          {/* <div className="single-room-info">
            <article className="desc">
              <p>{bio}</p>
            </article>
            <article className="info">
              <h6>Formed : {yrFormed}</h6>
              {yrEnded !== 0 ? <h6>Dismantled : {yrEnded}</h6> : <></>}
              <h6>Home : {homeTown}, {homeCountry}</h6>
            </article>
          </div> */}

          
        </section>
        {/* <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section> */}
      </>
    );
  }
}
