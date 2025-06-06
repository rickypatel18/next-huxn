import Link from "next/link";
import React from "react";

const page = () => {
  // if (2 < 5) {
  //   throw new Error("This code will be errorrr");
  // }
  return <div className="border p-20 w-50">
    <h1>
      members
    </h1>
    <Link href="/salaries">Go to salary page</Link>
  </div>;
};

export default page;
