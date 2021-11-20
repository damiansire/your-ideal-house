import React, { useEffect, useState } from "react";
import {
  getPendingMatchHouseData,
  getHouseImages,
} from "../../adapters/housesData";
import TinderCardContainer from "../../components/TinderCardContainer/TinderCardContainer";
import HouseData from "./HouseData";
import ImagesList from "./ImagesList";
import { isEmpty } from "../../lib/isEmpty";

const MathHouse = () => {
  const [pendingHouse, setPendingHouse] = useState({});
  // QUESTION: Es mejor unir estos dos estados en uno? selectedHouse = {data : {}, images : []}
  const [selectedHouse, setSelectedHouse] = useState({});
  const [selectedHouseImage, setSelectedHouseImage] = useState({});

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
      });
    }
  }, [selectedHouse]);

  return (
    <>
      {/*<div>{selectedHouse && <TinderCardContainer />}</div> */}
      <div>
        {selectedHouseImage.length > 0 && (
          <ImagesList images={selectedHouseImage} />
        )}
        {!isEmpty(selectedHouse) && <HouseData house={selectedHouse} />}
      </div>
    </>
  );
};

export default MathHouse;

/*

  //ttp://localhost:3001/houses/img/MLU604128144
  */
