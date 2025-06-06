"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/portfolio">portfolio</Link>
          <button onClick={() => router.push("/")}>Login</button>
          <button onClick={() => router.refresh()}>Go to other</button>
          <button onClick={() => router.back()}>Go to other</button>
          <button onClick={() => router.prefetch("/portfolio")}>Go to other</button>
          <button onClick={() => router.replace("/product")}>Go to product</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
