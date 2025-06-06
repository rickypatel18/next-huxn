"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300"
      type="submit"
      disabled={pending}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

export default SaveButton;
