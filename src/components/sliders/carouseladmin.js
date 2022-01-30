import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function CarouselAdmin({ pet }) {
  const { pics } = pet;
  return (
    <MDBCarousel showControls interval={10000000}>
      <MDBCarouselInner>
        {pics.map((img, i) => (
          <MDBCarouselItem itemId={i}>
            <MDBCarouselElement
              className="carousel-height"
              src={img.url}
              alt="..."
            />
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
