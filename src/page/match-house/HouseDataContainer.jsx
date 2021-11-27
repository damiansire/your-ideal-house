import React, { useEffect, useState } from "react";
import {
  getPendingMatchHouseData,
  getHouseImages,
} from "../../adapters/housesData";
import HouseGallery from "./components/HouseGallery";
import "./HouseDataContainer.css";
import HouseCard from "./components/HouseCard/HouseCard";
import MatchOptions from "./components/MatchOptions";
import HouseFilter from "./components/HouseFilter";

const HouseDataContainer = () => {
  const [pendingHouse, setPendingHouse] = useState({});
  // QUESTION: Es mejor unir estos dos estados en uno? selectedHouse = {data : {}, images : []}
  const [selectedHouse, setSelectedHouse] = useState({});
  const [selectedHouseImage, setSelectedHouseImage] = useState({});
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    getPendingMatchHouseData().then((data) => {
      setPendingHouse(data);
    });
  }, []);

  useEffect(() => {
    setSelectedHouse(pendingHouse[0]);
  }, [pendingHouse]);

  useEffect(() => {
    if (selectedHouse) {
      getHouseImages(selectedHouse.id).then((houseImages) => {
        setSelectedHouseImage(houseImages);
        if (houseImages.length > 0) {
          setSelectedImage(houseImages[0].imageurl);
        }
      });
    }
  }, [selectedHouse]);

  return (
    <div className="container">
      <div className="filterOptions">
        <HouseFilter />
      </div>
      <div className="descriptionCard">
        <HouseCard />
      </div>
      <div className="matchOption">
        <MatchOptions />
      </div>
      <div className="imageGalery">
        {selectedHouseImage.length > 0 && (
          <HouseGallery
            images={selectedHouseImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
    </div>
  );
};

export default HouseDataContainer;
