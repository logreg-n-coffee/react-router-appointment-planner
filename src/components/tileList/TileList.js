import React from "react";
import { Tile } from "../tile/Tile";

// TileList is shared by ContactsPage and AppointmentsPage
// func TileList receives a prop (an object named 'data')

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => <Tile key={index} tile={tile} />)}
    </div>
  );
};
