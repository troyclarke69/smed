import React, { Component, useEffect } from "react";
// import items from "./data";
import axios from 'axios';
import { URL_BASE, URL_ARTIST } from './constants'; 

const ArtistContext = React.createContext();

export default class ArtistProvider extends Component {
  state = {
    artists: [],
    sortedArtists: [],
    featuredArtists: [],
    loading: true,
    //
    genre: "~all~",
    artistName: ""
  };

  getData() {
    const apiUrl = URL_BASE + URL_ARTIST;
  
    axios.get(apiUrl)
      .then((res) => {
        const data = res.data;
        // console.log(data);

        let artists = this.formatData(data);
        // console.log('artists', artists);
        // let artists = items;
        let featuredArtists = artists.filter(artist => artist.featured === true);
        // console.log('featured', featuredArtists);
        // console.log(featuredArtists);
        this.setState({
          artists,
          featuredArtists,
          sortedArtists: artists,
          loading: false,
        });
    });
  }

  componentDidMount() {
    this.getData();

    // let artists = this.formatData(items);
    // let artists = this.formatData(data);
    // console.log('artists', artists);
    // // let artists = items;
    // let featuredArtists = artists.filter(artist => artist.featured === true);
    // console.log('featured', featuredArtists);
    // // console.log(featuredArtists);
    // this.setState({
    //   artists,
    //   featuredArtists,
    //   sortedArtists: artists,
    //   loading: false,
    // });
  }

  formatData(items) {
    // console.log('items', items);
    let tempItems = items.map(item => {
      let id = item.id;    
      // console.log('id', id);

      let images = item.imageData.map(image => image.url);
      // console.log('images', images);

      // let musicians = item.musicianData.map(musician => musician.musicianName);

      let artist = { ...item, images, id };
      // console.log('artist', artist);

      return artist;
    });
    return tempItems;
  }

  getArtist = (slug) => {
    let tempArtists = [...this.state.artists];
    const artist = tempArtists.find(artist => artist.slug === slug);
    return artist;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    if (name === 'artistName'){
      console.log('handleChange', name, value);
    }
    this.setState(
      {
        [name]: value
      },
     
      this.filterArtists
    );
  };

  filterArtists = () => {
    let {
      artists,
      genre,
      artistName
    } = this.state;

    let tempArtists = [...artists];
    // transform values
    // get capacity
    // capacity = parseInt(capacity);
    // price = parseInt(price);

    // filter by genre
    if (genre !== "~ All ~") {
      tempArtists = tempArtists.filter(artist => artist.genre === genre);
    }

    // filter by name
    if (artistName !== "") {
        // console.log('artistName ', artistName);
        // reload the tempArtists to nullify any genre picked
        tempArtists = [...artists];
        tempArtists = tempArtists.filter(artist => 
          artist.artistName.toLowerCase()
            .includes(artistName.toLowerCase()));
    }
    this.setState({
      sortedArtists: tempArtists
    });
  };

  render() {
    return (
      <ArtistContext.Provider
        value={{
          ...this.state,
          getArtist: this.getArtist,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ArtistContext.Provider>
    );
  }
}
const ArtistConsumer = ArtistContext.Consumer;

export { ArtistProvider, ArtistConsumer, ArtistContext };

export function withArtistConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ArtistConsumer>
        {value => <Component {...props} context={value} />}
      </ArtistConsumer>
    );
  };
}
