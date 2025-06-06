import React from "react";

const page = async () => {
  await new Promise((res) =>
    setTimeout(() => {
      res("content is currently loading..");
    }, 3000)
  );

  return <div className="border p-20 w-50">commnets</div>;
};

export default page;
