import React from "react";
type GameProps = {
  game: {
    name: string;
    img: string;
  };
};

const GameCard = ({ game }: GameProps) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={game.img}
        alt={game.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{game.name}</h3>
    </div>
  );
};

export default GameCard;
