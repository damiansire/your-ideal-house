import React from "react";
import "./HouseGallery.css";

const HouseGallery = ({ images, setSelectedImage }) => {
  images = images.slice(0, 6);
  return (
    <div class="HouseGallery">
      <div class="top-HouseGallery">
        <div>
          <span class="title-HouseGallery"> Fotos </span>
        </div>
        <div class="priceContainer-HouseGalley">
          <span class="price"> 2.547 </span>
          <span class="currencySymbol">USD</span>
        </div>
      </div>
      <div className="imagesContainer">
        {images &&
          images.map((image) => {
            return (
              <div key={image.imageurl} className="houseImageContainer">
                {/* QUESTION: Tiene sentido poner una key inutil como el caso de la url? */}
                <img
                  className="houseImage"
                  onClick={() => {
                    setSelectedImage(image.imageurl);
                  }}
                  src={image.imageurl}
                  alt={image.id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HouseGallery;
