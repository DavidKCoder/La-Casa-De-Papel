import React from "react";

function Footer() {
  return (
    <div className="footer">
      <audio controls autoPlay loop src="audio.mp3" type="audio/mp3" />
      <h6>
        2020© Designed by <ion-icon name="logo-github"></ion-icon>{" "}
        <a href="https://github.com/DavidKizinger">David K.</a>{" "}
      </h6>

      <span className="top">
        <a href="#main-section">
          <ion-icon name="chevron-up-outline"></ion-icon>
        </a>
      </span>
    </div>
  );
}

export default Footer;
