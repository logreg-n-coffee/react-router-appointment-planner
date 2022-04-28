import React from "react";


// Tile receives one prop (value in TileList) 
export const Tile = ({ tile }) => {
  const valuesInObj = Object.values(tile);

  return (
    <div className="tile-container">
      {
        valuesInObj.map( (valueInObj, index) => {
          if (index === 0) {
            return <p className="tile-title" key={index}> {valueInObj} </p>
          } else {
            return <p className="tile" key={index}> {valueInObj} </p>
          }
        })
      }
    </div>
  );
};
