import React from "react";
import "./style.css";

const Album = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.image[1]['#text']} alt="img" />
      <div>
      <strong>{album.name}</strong>
      <p>{album.artist.name}</p>
      </div>
      <p><i className="fa-sharp fa-solid fa-circle-play"></i>:{album.playcount}</p>
    </div>
  );
};

export default Album;
