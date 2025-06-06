import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-10/12 mx-auto p-10 text-gray-700">
      <h1 className="text-5xl text-extrabold text-center drop-shadow-lg">
        Movie APP
      </h1>
      <p className="mt-4 text-lg text-grayy-300">
        Add and manage your favourite movie with ease
      </p>

      <div className="mt-8 flex space-x-4">
        <Link href="/add-movie">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out text-white rounded-lg shadow-md transform hover:scale-105">
            Add Movie
          </button>
        </Link>
        <Link href="/all-movies">
          <button className="px-6 py-3 bg-gray-600 hover:bg-gray-700 transition duration-300 ease-in-out text-white rounded-lg shadow-md transform hover:scale-105">
            View All Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
