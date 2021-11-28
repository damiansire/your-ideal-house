import React from "react";
import "./MatchOptions.css";
import { sendLike, sendDislike } from "../../../adapters/housesData";

const likeButtonHandler = (houseId) => {
  sendLike(houseId).then((response) => {
    console.log(response);
  });
};

const dislikeButtonHandler = (houseId) => {
  sendDislike(houseId).then((response) => {
    console.log(response);
  });
};

const MatchOptions = ({ houseId }) => {
  return (
    <div className="tinder--buttons">
      <button
        id="love"
        data-id={houseId}
        onClick={() => {
          likeButtonHandler(houseId);
        }}
      >
        <i className="fa fa-heart"></i>
      </button>
      <button
        id="nope"
        onClick={() => {
          dislikeButtonHandler(houseId);
        }}
      >
        <i className="fa fa-remove"></i>
      </button>
    </div>
  );
};

export default MatchOptions;
