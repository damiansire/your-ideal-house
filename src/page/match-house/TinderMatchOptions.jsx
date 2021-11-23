import React from "react";
import "./TinderMatchOptions.css";
const TinderMatchOptions = () => {
  return (
    <div class="tinder--buttons">
      <button id="love">
        <i class="fa fa-heart"></i>
      </button>
      <button id="nope">
        <i class="fa fa-remove"></i>
      </button>
    </div>
  );
};

export default TinderMatchOptions;
