import React from "react";
import { redirect } from "next/navigation";

const Notfound = () => {
  redirect("/");
  return (
    <div>
      <div>
        <h1>404 - Page not Found</h1>
        <p>Page does not exist.</p>
      </div>
    </div>
  );
};

export default Notfound;
