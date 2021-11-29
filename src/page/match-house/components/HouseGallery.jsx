import React from "react";
import "./HouseGallery.css";

const HouseGallery = ({ images, setSelectedImage, expenses, openModal }) => {
  return (
    <div className="HouseGallery">
      <div className="top-HouseGallery">
        <div>
          <span className="title-HouseGallery"> Fotos </span>
        </div>
        <div className="priceContainer-HouseGalley">
          <span className="currencySymbol">{expenses?.currency}</span>
          <span className="price">
            {expenses?.price + expenses?.gastoscomunes}
          </span>
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
                    openModal();
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
