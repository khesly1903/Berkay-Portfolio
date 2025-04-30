import React from "react";
import "../styles/information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function InformationCard() {
  return (
    <div className="information-card-container">
      <div className="information-card">
        <img src="/images/berkay.png" alt="" className="information-image" />

        <div className="info-type1">
          <a
            href="mailto:kayaberkay1626@gmail.com"
            className="information-icon"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            kayaberkay1626@gmail.com
          </a>
        </div>
        <div className="info-type1">
          <p className="information-icon">
            <FontAwesomeIcon icon={faLocationDot} />  Istanbul
          </p>
        </div>
        <div className="info-type2">
          <a
            href="https://www.linkedin.com/in/berkay-kaya-3a8bb0235/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/khesly1903"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
      </div>
    </div>
  );
}
