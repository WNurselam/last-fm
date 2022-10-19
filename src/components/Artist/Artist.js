import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Artist = ({ artist }) => {
  //console.log(artist.mbid)
  return (
    <div className="artist-container">
      <div className="artist-card">
        <Link to={`/detail/${artist.mbid}`}>
          <div className="artist-image">
            {" "}
            <img src={artist.image[1]["#text"]} alt="img" />
          </div>
        </Link>
        <div className="artist">
          <p>Artist</p>
          <h3>{artist.name}</h3>
        </div>
        <span className="play-list">
          <p><i className="fa-solid fa-headphones"></i>:{artist.listeners}</p>
          <span><i className="fa-sharp fa-solid fa-circle-play"></i>:{artist.playcount}</span>
        </span>
      </div>
    </div>
  );
};

export default Artist;
