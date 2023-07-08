import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const FavButton = () => (
  <FontAwesomeIcon icon={faHeart} className="w-4 h-4 absolute top-0 right-px" />
);
