import React, { useState } from "react";
import AirPlane from "./AirPlane";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slide from "@mui/material/Slide";
import './Flights.css';

function Flights(props) {
  const { place, price, img} = props;

  const [arrow, setArrow] = useState(<ArrowForwardIosIcon />);
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
    expand
      ? setArrow(<ArrowForwardIosIcon size={140} />)
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
          <AirPlane place={place}/>
        </div>
      </Slide>
    </div>
  );
}

export default Flights;
