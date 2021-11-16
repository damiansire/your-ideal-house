import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import "./CarouselDiv.css";

async function getImageData(houseId) {
  let result;
  try {
    const response = await fetch(`http://localhost:3001/houses/img/${houseId}`);
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  console.log(result);
  return result || [];
}

const CarouselDiv = ({ houseId, width }) => {
  const [houseImages, setHouseImages] = useState([]);

  useEffect(() => {
    getImageData(houseId).then((data) => {
      setHouseImages(data);
    });
  }, [houseId]);

  return (
    <Carousel width={width || "50%"}>
      {houseImages.length > 0 &&
        houseImages.map((img) => {
          return (
            <div>
              <img src={img.imageurl} alt="Imagen del apartamento" />
              <p className="legend">Legend 1</p>
            </div>
          );
        })}
    </Carousel>
  );
};

export default CarouselDiv;
