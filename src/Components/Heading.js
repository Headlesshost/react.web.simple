import React from "react";

export default function Heading({ section }) {
  return (
    <div className="container mt-5">
      <div className="px-4 py-5 mt-5 text-center">
        <h1 className="display-3 fw-bold mt-5">{section.title}</h1>
      </div>
    </div>
  );
}
