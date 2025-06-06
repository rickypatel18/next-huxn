"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginInter = () => {
  const router = useRouter();
  const [isOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95">
          <div className="w-full max-w-md p-6 bg-white rounded-lg relative">
            <button
              onClick={() => router.push("/games")}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
            >
              &#10005
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-red-700">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring"
                  type="email"
                  placeholder="enter email"
                />
              </div>
              <div className="mt-5">
                <label className="block text-sm font-medium text-red-700">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring"
                  type="password"
                  placeholder="enter password"
                />
              </div>
              <button
                className="mt-5 w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginInter;
