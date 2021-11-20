import React from "react";
import "./HousePrice.css";

const HousePrice = ({ priceObj }) => {
  console.log(priceObj);
  return (
    <table className="housePriceTable">
      <thead>
        <th>Alquiler</th>
        <th>Gastos Comunes</th>
      </thead>
      <tbody>
        <td>{priceObj.price}</td>
        <td>{priceObj.gastoscomunes}</td>
      </tbody>
    </table>
  );
};

export default HousePrice;
