import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faEnvelope, faClock, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Importer Link pour utiliser le routage

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/gallery">
            <FontAwesomeIcon icon={faImage} />
          </Link>
        </li>
        <li>
          <Link to="/mail">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
        <li>
          <Link to="/timer">
            <FontAwesomeIcon icon={faClock} />
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <FontAwesomeIcon icon={faComment} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
