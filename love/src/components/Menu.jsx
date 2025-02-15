// src/components/Menu.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faEnvelope, faClock, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";  // Utilisation de Link pour la navigation

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/image">
            <FontAwesomeIcon icon={faImage} />
          </a>
        </li>
        <li>
          <a href="/mail">
            <FontAwesomeIcon icon={faEnvelope} /> 
          </a>
        </li>
        <li>
          {/* Lien vers la page Timer */}
          <Link to="/timer">
            <FontAwesomeIcon icon={faClock} /> 
          </Link>
        </li>
        <li>
          <a href="/comments">
            <FontAwesomeIcon icon={faComment} /> 
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
