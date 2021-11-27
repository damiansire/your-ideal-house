import React from "react";
import "./HouseFilter.css";

const HouseFilter = () => {
  //Los voy a traer del backend
  const availableFilters = [
    { name: "Rango de precio", type: "Number" },
    { name: "Permite mascotas", type: "Bool" },
    { name: "Cantidad de habitaciones", type: "Number" },
    { name: "Ubicacion", type: "Number" },
  ];
  return (
    <div className="HouseFilter">
      <div>
        <span className="description-HouseFilter"> Filtros de busqueda </span>
      </div>
      <div className="add-button-container-HouseFilter">
        <button className="add-button-HouseFilter">
          <span className="add-button-text-HouseFilter">+</span>
        </button>
      </div>
    </div>
  );
};

export default HouseFilter;
