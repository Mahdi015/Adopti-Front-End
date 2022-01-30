import { Carousel } from "react-bootstrap";
import React from "react";

import cover from "../images/main.jpg";

export const Slider = () => {
  return (
    <Carousel className="pb-5">
      <Carousel.Item>
        <img className="d-block w-100" src={cover} alt="First slide" />
        <Carousel.Caption>
          <h3>Adopti</h3>
          <p>Adopti</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cover} alt="Second slide" />

        <Carousel.Caption>
          <h3>Adopti</h3>
          <p>Adopti.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={logo2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};
export default Slider;
