import Navbar from "@/components/Navbar";
import { Command, DessertIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
    },
    {
      id: 2,
      title: "Inception2",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
    },
    {
      id: 3,
      title: "Inception3",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
    },
    {
      id: 4,
      title: "Inception4",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
    },
    {
      id: 5,
      title: "Inception5",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
    },
    {
      id: 6,
      title: "Inception6",
      comment: 123,
      ratting: 4.5,
      description: "A mid-blowing thriller movie",
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comment, 0);
  const averageRatting = (
    movies.reduce((sum, movie) => sum + movie.ratting, 0) / totalMovies
  ).toFixed(1);

  return (
    <div>
      <Navbar />
      <div className="p-8 space-y-6 bg-gray-900 min-h-screen">
        <div className="bg-blue-600">
          <h2>Dashboear Overview</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p>total movie</p>
            <p>{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p>total Comments</p>
            <p>{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p>Average Ratting</p>
            <p>{averageRatting}</p>
          </div>
        </div>

        {/* movie list */}

        <h2 className="text-xl fonr-semibold text-white">Movie List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <li key={movie.id} className="bg-gray-800 p-6 rounded-b-lg">
              <Link
                className="text-2xl text-blue-400"
                href={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
              <p className="text-gray-400">{movie.description}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm text-gray-300">
                  <Command />
                  <span>{movie.comment}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm text-gray-300">
                  <DessertIcon />
                  <span>{movie.description}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
