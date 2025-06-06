import Home from "@/app/page";
import { Clock, TrendingUpIcon } from "lucide-react";

const Default = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUpIcon /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">Favorite</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://plus.unsplash.com/premium_photo-1748909096532-6defe679b234?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt="unspalsh image"
                className="h-10 w-10 bg-gray-700 rounded-md"
              />
              <div>
                <p className="text-white font-bold">random</p>
                <p className="text-white ">Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Default;
