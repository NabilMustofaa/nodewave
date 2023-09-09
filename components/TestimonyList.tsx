import React from "react";
import TestimonyItem from "./TestimonyItem";

interface Testimony {
  id: number;
  name: string;
  content: string;
}

interface TestimonyListProps {
  testimonies: Testimony[];
}

export default function TestimonyList({ testimonies }: TestimonyListProps) {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8">
      {testimonies.map((testimony) => (
        <TestimonyItem {...testimony} key={testimony.id} />
      ))}
    </div>
  );
}
