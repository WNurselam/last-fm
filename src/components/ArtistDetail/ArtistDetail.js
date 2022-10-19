import React from "react";
import "./style.css";
import { useParams } from "react-router";
import axios from "axios";
import Album from "../Album/Album";
import Track from "../Track/Track";
import { useQuery } from "react-query";

const ArtistDetail = () => {
  const { mbid } = useParams();
  const { isLoading, data: albums } = useQuery("Artist Album", () => {
    return axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=c88f5fe3f52f040d8e458b1c39399974&mbid=${mbid}&format=json`
      )
      .then((res) => res.data.topalbums.album);
  });

  const { data: tracks } = useQuery("Artist Tracks", () => {
    return axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=c88f5fe3f52f040d8e458b1c39399974&mbid=${mbid}&format=json`
      )
      .then((res) => res.data.toptracks.track);
  });

  const { data: name } = useQuery("Artist Name", () => {
    return axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=c88f5fe3f52f040d8e458b1c39399974&mbid=${mbid}&format=json`
      )
      .then((res) => res.data.artist);
  });

  //console.log(name);
  //console.log(albums)
  //console.log(tracks);

  return (
    <div className="artist-detail">
      <div className="artist-name">
        {name && <h2>{name.name}</h2>}
        {/* <img src={name.image[1]['#text']} alt="" /> */}
      </div>

      <div className="main">
        <div className="albumscrol">
          <p className="header">Top Albums</p>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            albums &&
            albums.map((album, index) => <Album album={album} key={index} />)
          )}
        </div>
        <div className="albumscrol">
          <p className="header">Top Tracks</p>
          {tracks &&
            tracks.map((track, index) => <Track track={track} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
