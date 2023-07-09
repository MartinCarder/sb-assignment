import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const FavButton = () => (
  <FontAwesomeIcon icon={faHeart} className="w-3 h-3 absolute top-0 right-2" />
);
