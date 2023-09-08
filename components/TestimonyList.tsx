import React from "react";
import TestimonyItem from "./TestimonyItem";

export default function TestimonyList({ testimonies }) {
  return (
    <div className="flex flex-row justify-between gap-8">
      {testimonies.map((testimony) => (
        <TestimonyItem {...testimony} key={testimony.id} />
      ))}
    </div>
  );
}
