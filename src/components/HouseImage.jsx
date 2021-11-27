import React from "react";

const HouseImage = ({ imageUrl, setSelectedImage }) => {
  return (
    <div key={imageUrl.imageurl} className="houseImageContainer">
      {/* QUESTION: Tiene sentido poner una key inutil como el caso de la url? */}
      <img
        onClick={() => {
          setSelectedImage(imageUrl.imageurl);
        }}
        src={imageUrl.imageurl}
        alt={imageUrl.id}
      />
    </div>
  );
};

export default HouseImage;
