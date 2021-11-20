import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCardContainer.css";

const TinderCardContainer = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const db = [
    {
      name: "Richard Hendricks",
      url: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/98.jpg?crop=1000,563,x0,y95&width=1900&height=1069&optimize=high&format=webply",
    },
    {
      name: "Erlich Bachman",
      url: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/98.jpg?crop=1000,563,x0,y95&width=1900&height=1069&optimize=high&format=webply",
    },
    {
      name: "Monica Hall",
      url: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/98.jpg?crop=1000,563,x0,y95&width=1900&height=1069&optimize=high&format=webply",
    },
    {
      name: "Jared Dunn",
      url: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/98.jpg?crop=1000,563,x0,y95&width=1900&height=1069&optimize=high&format=webply",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/98.jpg?crop=1000,563,x0,y95&width=1900&height=1069&optimize=high&format=webply",
    },
  ];

  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      <h1>React Tinder Card</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
};

export default TinderCardContainer;
