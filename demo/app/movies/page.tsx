import Link from "next/link";
import React from "react";

const movies = [
  {
    id: "1",
    title: "Inception",
  },
  {
    id: "2",
    title: "Interstellar",
  },
];

const MoviePage = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-3xl mb-4">MOvies List</h2>
      <ul className="space-y-4 text-white">
        {movies.map((movie) => (
          <li className="p-3 bg-green-800 rounded-2xl" key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;
