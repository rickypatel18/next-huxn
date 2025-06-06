import React from "react";

const Project = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  return (
    <div>
      <ul>
        {all.map((al) => (
          <li key={al}>{al}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
