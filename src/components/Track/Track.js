import React from "react";
import "./style.css";

const Track = ({ track }) => {
  return (
    <div className="track-card">
      <img src={track.image[1]['#text']} alt="img" />
      <div>
        <strong>{track.name}</strong>
        <p>{track.artist.name}</p>
      </div>
      <div>
        <p><i className="fa-solid fa-headphones"></i>:{track.listeners}</p>
        <p><i className="fa-sharp fa-solid fa-circle-play"></i>:{track.playcount}</p>
      </div>
    </div>
  );
};

export default Track;
