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
    <div class="tinder--buttons">
      <button
        id="love"
        data-id={houseId}
        onClick={() => {
          likeButtonHandler(houseId);
        }}
      >
        <i class="fa fa-heart"></i>
      </button>
      <button
        id="nope"
        onClick={() => {
          dislikeButtonHandler(houseId);
        }}
      >
        <i class="fa fa-remove"></i>
      </button>
    </div>
  );
};

export default MatchOptions;
