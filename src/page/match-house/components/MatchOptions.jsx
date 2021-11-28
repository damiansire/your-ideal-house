import React from "react";
import "./MatchOptions.css";
import { sendLike, sendDislike } from "../../../adapters/housesData";

const MatchOptions = ({
  houseId,
  setSelectedHouse,
  removedPendingHouseById,
}) => {
  const optionHandler = async (houseId, option) => {
    let response;

    if (option === "like") {
      response = await sendLike(houseId);
    } else if (option === "dislike") {
      response = await sendDislike(houseId);
    }

    if (response === true) {
      debugger;
      removedPendingHouseById(houseId);
    }
  };

  return (
    <div className="tinder--buttons">
      <button
        id="love"
        data-id={houseId}
        onClick={() => {
          optionHandler(houseId, "like");
        }}
      >
        <i className="fa fa-heart"></i>
      </button>
      <button
        id="nope"
        onClick={() => {
          optionHandler(houseId, "dislike");
        }}
      >
        <i className="fa fa-remove"></i>
      </button>
    </div>
  );
};

export default MatchOptions;
