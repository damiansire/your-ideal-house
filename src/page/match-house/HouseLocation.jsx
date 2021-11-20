import React from "react";

import "./HouseLocation.css";

const HouseLocation = ({ location }) => {
  return (
    <table className="houseLocationTable">
      <thead>
        <tr>
          {location.location && <th>location</th>}
          <th>calle</th>
          <th>barrio</th>
          <th>ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {location.location && <td>{location.location}</td>}
          <td>{location.calle}</td>
          <td>{location.barrio}</td>
          <td>{location.ciudad}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default HouseLocation;
