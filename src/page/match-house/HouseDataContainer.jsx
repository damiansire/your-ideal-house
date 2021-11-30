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

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HouseDataContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pendingHouse, setPendingHouse] = useState([]);
  // QUESTION: Es mejor unir estos dos estados en uno? selectedHouse = {data : {}, images : []}
  const [selectedHouse, setSelectedHouse] = useState({});
  const [selectedHouseImage, setSelectedHouseImage] = useState({});
  const [selectedImage, setSelectedImage] = useState("");

  const removedPendingHouseById = (houseId) => {
    setPendingHouse((lastState) => {
      return lastState.filter((house) => house.id !== houseId);
    });
  };

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
        <HouseCard selectedHouse={selectedHouse} image={selectedImage} />
      </div>
      <div className="matchOption">
        <MatchOptions
          houseId={selectedHouse?.id}
          setSelectedHouse={setSelectedHouse}
          removedPendingHouseById={removedPendingHouseById}
        />
      </div>
      <div className="imageGalery">
        {selectedHouseImage.length > 0 && (
          <HouseGallery
            images={selectedHouseImage}
            expenses={selectedHouse?.expenses}
            setSelectedImage={setSelectedImage}
            openModal={handleOpen}
          />
        )}
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              style={{ height: "90vh" }}
              className="houseImage"
              src={selectedImage}
              alt="Vista previa de la imagen"
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default HouseDataContainer;
