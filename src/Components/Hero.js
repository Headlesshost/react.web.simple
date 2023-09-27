import React from "react";

export default function Hero({ section }) {
  const { title, paragraph } = section;
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">{title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
