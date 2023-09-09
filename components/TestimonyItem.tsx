import React from "react";

interface TestimonyItemProps {
  id: number;
  name: string;
  content: string;
}

export default function TestimonyItem({
  id,
  name,
  content,
}: TestimonyItemProps) {
  return (
    <div className="flex flex-col bg-white rounded-md py-3 px-4" key={id}>
      <p>{content}</p>
      <p className="text-teal-500 mt-3">{name}</p>
    </div>
  );
}
