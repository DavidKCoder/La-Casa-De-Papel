import React from "react";

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo"
          aria-controls="navbarTogglerDemo"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <a
            className="navbar-brand"
            href="https://www.netflix.com/am/title/80192098"
          >
            <img src="../img/Casadepapel.png" alt="logo"></img>{" "}
          </a>
          <ul className="nav navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#main-section">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#episodes">
                Episodes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#videos">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#actors">
                Actors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awards">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cast">
                Cast
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
