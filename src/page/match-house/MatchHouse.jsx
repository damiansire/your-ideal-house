import React, { useEffect, useState } from "react";
import { getPendingMatchHouseData } from "../../adapters/housesData";
import CarouselDiv from "../../components/CarouselDiv";
import MatchOptions from "../../components/MatchOptions";
//Es mejor meterle un padre
const MathHouse = () => {
  const [pendingHouse, setPendingHouse] = useState({});
  const [selectedHouse, setSelectedHouse] = useState({});

  useEffect(() => {
    getPendingMatchHouseData().then((data) => {
      setPendingHouse(data);
    });
  }, []);

  useEffect(() => {
    setSelectedHouse(pendingHouse[0]);
  }, [pendingHouse]);

  return (
    <>
      <div>
        {selectedHouse && (
          <CarouselDiv width="30%" houseId={selectedHouse.id} />
        )}
      </div>
      <div>
        <MatchOptions />
      </div>
    </>
  );
};

export default MathHouse;
