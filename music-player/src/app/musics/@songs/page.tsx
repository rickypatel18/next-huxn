import { Clock, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const SongsList = async () => {
  const songs = [
    {
      id: 1,
      artist: " The Beatles",
      title: " Yesterday",
      time: "4:11",
    },
    {
      id: 2,
      artist: " Queen",
      title: " Bohemian Rhapsody",
      time: "5:55",
    },
    {
      id: 3,
      artist: " Michael Jackson",
      title: " Billie Jean",
      time: "4:54",
    },
    {
      id: 4,
      artist: " Led Zeppelin",
      title: " Stairway to Heaven",
      time: "8:02",
    },
    {
      id: 5,
      artist: " Nirvana",
      title: " Smells Like Teen Spirit",
      time: "5:01",
    },
    {
      id: 6,
      artist: " Bob Marley",
      title: " No Woman, No Cry",
      time: "3:46", // (Studio version, live is longer)
    },
    {
      id: 7,
      artist: " Eagles",
      title: " Hotel California",
      time: "6:30",
    },
    {
      id: 8,
      artist: " Pink Floyd",
      title: " Wish You Were Here",
      time: "5:34",
    },
  ];

  await new Promise((res) =>
    setTimeout(() => {
      res("content loading ..");
    }, 4000)
  );

  return (
    <div className="w-[96%] mx-auto px-4 ">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Song Collection
      </h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li
              key={song.id}
              className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
                  alt="music"
                  className="h-16 w-16 bg-gray-600 rounded-md flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-gray-300 text-sm">{song.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>

                <Heart
                  size={16}
                  className="cursor-pointer hover:text-red-500"
                />
                <button className="text-lg font-bold">..</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
