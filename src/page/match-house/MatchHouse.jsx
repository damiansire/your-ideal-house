import React, { useEffect, useState } from "react";
import {
  getPendingMatchHouseData,
  getHouseImages,
} from "../../adapters/housesData";
import TinderCardContainer from "../../components/TinderCardContainer/TinderCardContainer";
import HouseAttributes from "./HouseAttributes";
import ImagesList from "./ImagesList";
import { isEmpty } from "../../lib/isEmpty";
import "./MatchHouse.css";
import HousePrice from "./HousePrice";

const MathHouse = () => {
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
    <>
      {/*<div>{selectedHouse && <TinderCardContainer />}</div> */}
      <div>
        {selectedHouseImage.length > 0 && (
          <ImagesList
            images={selectedHouseImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
      <div className="bottomContainer">
        {!isEmpty(selectedHouse) && (
          <>
            <div className="attributeContainer">
              <HouseAttributes house={selectedHouse} />
            </div>
            <div className="priceContainer">
              {!isEmpty(selectedHouse.price) != undefined && (
                <HousePrice priceObj={selectedHouse.price} />
              )}
            </div>
          </>
        )}
        <div className="selectedImageContainer">
          {selectedImage && <img src={selectedImage} alt="Foto seleccionada" />}
        </div>
      </div>
    </>
  );
};

export default MathHouse;

/*

  //ttp://localhost:3001/houses/img/MLU604128144
  */
