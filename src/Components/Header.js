import React from "react";
import { Link } from "react-router-dom";

export default function Header({ viewModel, activePage = "home" }) {
  const { title, links = [], logo } = viewModel?.content || {};
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          {logo && <img src={logo.url} alt="" width="40" className="me-2" />}
          <Link to="/home" className="navbar-brand">
            {title}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-md-0">
              {links.map((l) => {
                const { submenu = [] } = l;
                return submenu.length > 0 ? (
                  <li className="nav-item dropdown" key={l.identifier}>
                    <button className="btn btn-dark dropdown-toggle nav-link me-2 px-2" data-bs-toggle="dropdown" aria-expanded="false">
                      {l.title}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark mt-2">
                      {submenu.map((s) => (
                        <li key={s.identifier}>
                          <Link to={`/${s.identifier}`} className={`nav-link ${s.identifier === activePage ? "active" : ""}`}>
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item me-auto" key={l.identifier}>
                    <Link to={`/${l.identifier}`} className={`btn btn-dark nav-link  me-2 ${l.identifier === activePage ? "active" : ""}`}>
                      <div className="px-2">{l.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
