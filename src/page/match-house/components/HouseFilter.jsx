import React, { useEffect, useState } from "react";
import "./HouseFilter.css";
import { getFilters } from "../../../adapters/housesData";
import Chip from "@mui/material/Chip";

/* https://mui.com/components/selects/ */

const HouseFilter = () => {
  const [availableFilters, setAvailableFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([
    { name: "Habitaciones", type: "Number" },
  ]);

  useEffect(() => {
    getFilters().then((data) => {
      setAvailableFilters(data);
    });
  }, []);

  const handleDelete = () => {};
  /*
    {availableFilters.map((filter) => {
        return (
        <button>
            <span>{filter.name}</span>
        </button>
        );
    })}
    */

  return (
    <div className="HouseFilter">
      <div>
        <span className="description-HouseFilter"> Filtros de busqueda </span>
      </div>
      <div className="add-button-container-HouseFilter">
        <button className="add-button-HouseFilter">
          <span className="add-button-text-HouseFilter">+</span>
        </button>
        {selectedFilters.map((filter) => {
          return (
            <Chip
              label={filter.name}
              variant="outlined"
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HouseFilter;
