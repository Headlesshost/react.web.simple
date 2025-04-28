import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ viewModel }) {
  const { links = [], title } = viewModel?.content || {};
  return (
    <footer className="footer mt-auto py-3 bg-light border-top">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <p className="col-md-4 mb-0 text-muted ms-2">{title}</p>
        <ul className="nav col-md-4 justify-content-end">
          {links.map((l) => (
            <li className="nav-item" key={l.identifier}>
              <Link to={`/${l.identifier}`} className="nav-link text-muted">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
