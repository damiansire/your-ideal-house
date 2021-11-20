import React from "react";

const HouseData = ({ house }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* QUESTION: Puedo usar un for in en vez de un map? O solo se renderiza con map?*/}
            {Object.keys(house.attributes).map((attribute) => {
              return <th> {attribute} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(house.attributes).map((attribute) => {
              return <th> {attribute} </th>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseData;
