import React from "react";
import "./ImagesList.css";

const ImagesList = ({ images }) => {
  return (
    <div className="ImagesListContainer">
      {images &&
        images.map((image) => {
          return (
            <div key={image.imageurl}>
              {/* QUESTION: Tiene sentido poner una key inutil como el caso de la url? */}
              <img src={image.imageurl} alt={image.id} />
            </div>
          );
        })}
    </div>
  );
};

export default ImagesList;
