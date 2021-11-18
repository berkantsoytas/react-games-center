import React from "react";
import "./game.css";

const game = ({ title, imageUrl, descriptionTitle, descriptionText }) => {
  return (
    <div className="content">
      <div className="content-header">
        <span className="content-header-title">{title}</span>
      </div>
      <div className="content-image">
        <img src={imageUrl} width="300px" />
      </div>
      <div className="content-description">
        <div className="content-description-title">{descriptionTitle}</div>
        <div className="content-description-text">{descriptionText}</div>
      </div>
    </div>
  );
};

export default game;
