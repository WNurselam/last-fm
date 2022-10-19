import React from "react";
import Artist from "../Artist/Artist";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArtist, setTotalArtist] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=c88f5fe3f52f040d8e458b1c39399974&format=json&page=${page}`
      )
      .then(({ data }) => {
        setPage(page + 1);
        setArtists([...artists, ...data.artists.artist]);
        setTotalArtist(data.totalArtist);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="artist-container">
      <h1>Artist</h1>
      <InfiniteScroll
        dataLength={artists.length} 
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {artists.length > 0 &&
          artists.map((artist, index) => (
            <Artist artist={artist} key={index} />
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default ArtistList;
