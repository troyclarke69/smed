import React, { Component } from "react";
import items from "./data";
// import Client from "./Contentful";

const ArtistContext = React.createContext();
// console.log(items);

export default class ArtistProvider extends Component {
  state = {
    artists: [],
    sortedArtists: [],
    featuredArtists: [],
    loading: true,
    //
    type: "all",
  };

  componentDidMount() {
    // this.getData();
    let artists = this.formatData(items);
    // let artists = items;
    let featuredArtists = artists.filter(artist => artist.featured === true);
    // console.log(featuredArtists);
    this.setState({
      artists,
      featuredArtists,
      sortedArtists: artists,
      loading: false,
      //
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item._id;
      let images = item.images.map(image => image.url);
      let artist = { ...item, images, id };
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
    console.log(name, value);

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
    } = this.state;

    let tempArtists = [...artists];
    // transform values
    // get capacity
    // capacity = parseInt(capacity);
    // price = parseInt(price);
    // filter by type
    // if (type !== "all") {
    //   tempRooms = tempRooms.filter(room => room.type === type);
    // }
    // filter by capacity
    // if (capacity !== 1) {
    //   tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    // }
    // filter by price
    // tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    // tempRooms = tempRooms.filter(
    //   room => room.size >= minSize && room.size <= maxSize
    // );
    //filter by breakfast
    // if (breakfast) {
    //   tempRooms = tempRooms.filter(room => room.breakfast === true);
    // }
    //filter by pets
    // if (pets) {
    //   tempRooms = tempRooms.filter(room => room.pets === true);
    // }
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
