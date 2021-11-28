import React from "react";
import "./HouseCard.css";
import { isEmpty } from "../../../../lib/isEmpty";

const HouseCard = ({ selectedHouse, image }) => {
  console.log(selectedHouse);

  return (
    <>
      {!isEmpty(selectedHouse) && (
        <div className="houseCard">
          <article className="details-card">
            <div
              className="details-card__header"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${image})`,
              }}
            >
              <p className="details-card__price">
                <span className="details-card__currency">
                  {selectedHouse.expenses?.currency}
                </span>
                {selectedHouse.expenses?.price +
                  selectedHouse.expenses?.gastoscomunes}
              </p>
              <p className="details-card__location-header">
                {selectedHouse.location?.calle},{" "}
                <span>
                  {selectedHouse.location?.barrio},{" "}
                  {selectedHouse.location?.ciudad}
                </span>
              </p>
            </div>

            <div className="details-card__body">
              <h2 className="subtitle">Características generales</h2>

              <table>
                <tbody>
                  <tr>
                    <th>Alquiler</th>
                    <td>
                      {selectedHouse.expenses?.currency}
                      {selectedHouse.expenses?.price}
                    </td>
                  </tr>
                  <tr>
                    <th>Gastos comúnes</th>
                    <td>
                      {selectedHouse.expenses?.currency}
                      {selectedHouse.expenses?.gastoscomunes}
                    </td>
                  </tr>
                  {Object.keys(selectedHouse.attributes).map(
                    (attributeName) => {
                      return (
                        <>
                          <tr>
                            <th className="attributeNameCell">
                              {" "}
                              {attributeName}{" "}
                            </th>
                            <td className="attributeValueCell">
                              {selectedHouse.attributes[attributeName]}
                            </td>
                          </tr>
                        </>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default HouseCard;
