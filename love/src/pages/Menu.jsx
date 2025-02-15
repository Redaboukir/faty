import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faEnvelope, faClock, faComment } from "@fortawesome/free-solid-svg-icons";

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
          <a href="/timer">
            <FontAwesomeIcon icon={faClock} /> 
          </a>
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
