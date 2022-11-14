import React from "react";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-secondary border-opacity-25">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src="tag.png" alt="tag" style={{width: "140px", height: "100px"}}/>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fs-5"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
