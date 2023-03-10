import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import AirPlane from "./AirPlane";
import './styles/Flights.css';

function Flights({ place, price, img, passengers} ) {

  const [arrow, setArrow] = useState(<ArrowForwardIosIcon />);
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
    expand
      ? setArrow(<ArrowForwardIosIcon />)
      : setArrow(<ArrowBackIosIcon />);
  };

  return (
    <div style={{ backgroundImage: `url(${img})` }} className="flights">
      <div className="details">
        <h1>{place}</h1>
        <h3>R${price}</h3>
      </div>
      <div className="expansiveBtn" onClick={handleClick}>
        <div className="arrow">{arrow}</div>
      </div>
      <Slide direction="right" in={expand}>
        <div>
          <AirPlane place={place} price={price} passengers={passengers}/>
        </div>
      </Slide>
    </div>
  );
}

export default Flights;
