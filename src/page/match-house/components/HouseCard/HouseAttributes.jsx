import React from "react";
import "./HouseAttributes.css";

const HouseAttributes = ({ house }) => {
  return (
    <div>
      <table className="attributeTable">
        <tbody>
          {Object.keys(house.attributes).map((attributeName) => {
            return (
              <>
                <tr>
                  <th className="attributeNameCell"> {attributeName} </th>
                  <td className="attributeValueCell">
                    {house.attributes[attributeName]}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HouseAttributes;
