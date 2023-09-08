import React from "react";

export default function TestimonyItem({ id, name, content }) {
  return (
    <div className="flex flex-col bg-white rounded-md py-3 px-4 w-" key={id}>
      <p>{content}</p>
      <p className="text-teal-500 mt-3">{name}</p>
    </div>
  );
}
