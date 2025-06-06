import { FanIcon, GitCommitVertical } from "lucide-react";
import React from "react";

interface MovieProps {
  params: {
    id: string;
  };
}

const MovieDetails = ({ params }: MovieProps) => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
      commentsList: ["The best batman", "heath Ledger", "Iconic movie"],
    },
    {
      id: "2",
      title: "Interstellar",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
      commentsList: ["The best thriller", "space movie", "Iconic movie"],
    },
  ];

  const movie = movies.find((m) => m.id === params.id);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="p-8 blue-300">
        <h2 className="text-2xl text-white mb-4">{movie?.title}</h2>
        <p className="text-lg text-gray-200">{movie?.description}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-50">
              <FanIcon />
              <span className="text-xl font-bold">{movie?.ratting}</span> /5
            </div>
          </div>

          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <div className="flex items-center text-yellow-50">
              <GitCommitVertical />
              <span className="text-xl font-bold">{movie?.comment}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl text-white mb-4">Comments</h3>
        <ul className="space-y-4">
            {movie?.commentsList.map((cmnt,index) => (
                <li key={index}>{cmnt}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
