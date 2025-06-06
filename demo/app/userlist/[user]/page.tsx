import React from "react";

const page = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;
  return <div>{user}</div>;
};

export default page;
