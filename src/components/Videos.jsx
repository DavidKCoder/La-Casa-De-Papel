import React from "react";

function Video() {
  return (
    <div className="container-fluid" id="videos">
      <h2>
        Videos | <small>Money Heist</small>
      </h2>
      <div className="video-section">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            title="lacasa-video"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/ZAXA1DV4dtI?rel=0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            title="lacasa-video"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/p_PJbmrX4uk?rel=0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            title="lacasa-video"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/kn55h6L6-Ug?rel=0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
