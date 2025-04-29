import React from "react";
import { Link } from "react-router-dom";

export default function Split({ section }) {
  const { title, paragraph, leftAlign, buttonText, buttonSlug, image } = section?.content || {};
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className={`row ${!leftAlign ? "flex-lg-row-reverse" : ""} align-items-center g-5 py-5`}>
        {image && (
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={image.url} className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
        )}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">{paragraph}</p>
          {buttonSlug && buttonText && (
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to={`/${buttonSlug}`} className="btn btn-primary btn-lg px-4 me-md-2">
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
