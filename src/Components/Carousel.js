import React from "react";
import { Link } from "react-router-dom";

const TextPos = ["text-start", "", "text-end"];

export default function Carousel({ section }) {
  const { items = [] } = section?.content || {};
  let textIndx = 0;
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {items.map((i, x) => {
          const pos = textIndx >= TextPos.length ? 0 : textIndx++;
          const { background, slug } = i;
          return (
            <div className={`carousel-item ${x === 0 ? "active" : ""}`} key={i.title} style={{ backgroundImage: background ? `url(${background.url})` : "none", backgroundSize: "cover" }}>
              {!background && (
                <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <rect width="100%" height="100%" fill="#777" />
                </svg>
              )}
              <div className="container">
                <div className={`carousel-caption ${TextPos[pos]}`}>
                  <h1>{i.title}</h1>
                  <p>{i.description}</p>
                  {slug && (
                    <p>
                      <Link to={`/${slug}`} className="btn btn-lg btn-primary">
                        Go
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
