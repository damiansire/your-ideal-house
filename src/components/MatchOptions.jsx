import React from "react";
import "./MatchOptions.css";

const MatchOptions = () => {
  return (
    <div className="buttons-matchOptions-container">
      <div>
        <button class="btn btn-like">
          <div class="heart"></div>
        </button>
      </div>
      <div>
        <button class="btn btn-dislike">
          <div class="heart"></div>
        </button>
      </div>
      <div>Boton de nose</div>
    </div>
  );
};

export default MatchOptions;
