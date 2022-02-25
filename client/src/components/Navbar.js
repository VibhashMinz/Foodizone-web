import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <a className="navbar-brand" href="h">
          Food!Zone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="h">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="h">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
