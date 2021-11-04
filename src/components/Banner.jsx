import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = ({ end }) => {
  console.log(end );
  return (
    <div>
      <Carousel fade>
        {end.map((item, index) => (
          <Carousel.Item
            key={item.image}
            id="banner"
            interval={1000}
            keyboard={true}
          >
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
