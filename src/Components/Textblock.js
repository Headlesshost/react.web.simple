import React from "react";

export default function Textblock({ section }) {
  const { title, paragraph } = section;

  return (
    <div className="container pb-6 pb-md-8">
      <div className="row  mt-5">
        <div className="col-12">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <article>
            <p className="mr-prewrap">{paragraph}</p>
          </article>
        </div>
      </div>
    </div>
  );
}
