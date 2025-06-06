import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Gaming dashboard</h2>
      <div className="flex flex-col justify-between h-screen">
        <ul>
          <li className="flex items-center p-2 cursor-pointer">Games</li>
          <li className="flex items-center p-2 cursor-pointer">Profile</li>
          <li className="flex items-center p-2 cursor-pointer">Achievement</li>
          <li className="flex items-center p-2 cursor-pointer">Settings</li>
        </ul>

        <section className="mb-[7rem]">
          <Link href="/login" className="text-2xl font-bold">
            Login
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
