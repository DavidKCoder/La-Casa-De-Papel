import React from "react";

function Awards() {
  return (
    <div className="container-fluid" id="awards">
      <h2>
        Awards | <small>Money Heist</small>
      </h2>
      <div className="awards-section">
        <img src="././img/netflix_money_heist.png" alt="" />
        <div className="awards-section-text">
          <a href="https://en.wikipedia.org/wiki/Emmy_Award">
            <img src="././img/emmy.png" alt="" className="emmy" />
          </a>
          <a href=" https://en.wikipedia.org/wiki/F%C3%A9nix_Awards">
            <img src="././img/fenix.png" alt="" className="fenix" />
          </a>
          <h4>All 4 Seasons Now on Netflix</h4>
          <p>
            This riveting crime series won Best Drama at the International Emmy
            Awards, Premios Fénix and Premios Iris (plus six more Iris wins).
          </p>
        </div>
      </div>
    </div>
  );
}
export default Awards;
