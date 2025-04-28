import React from "react";

export default function BlockImage({ section }) {
  const { title, image } = section?.content || {};
  return (
    <div className="container mt-4">
      <div>
        <h5>{title}</h5>
        <img src={image.url} className="d-block img-fluid rounded" alt={title} loading="lazy" />
      </div>
    </div>
  );
}
