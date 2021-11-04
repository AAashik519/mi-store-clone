import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "../styles/hotitems.css";
const HotItemCard = ({name,image,price,index }) => {
  return (
    <>
      <div className="hotItemCard">
        <img src={ image}  alt="image" />
        <h5>{ name}</h5>
        <h6> { price}</h6>
      </div>
    </>
  );
};

export default HotItemCard;
