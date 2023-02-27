import React from "react";

export default function Hero({ section }) {
  const { title, paragraph } = section;
  return (
    <div className="container">
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">{title}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
