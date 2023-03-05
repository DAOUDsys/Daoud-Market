import React from "react";
import {Container, ImageFiled, Details, ByButton, ImageContainer} from './card.style';

function Card({ image, name, price }) {
  return (
    <Container>
      <ImageContainer>
      <ImageFiled src={image} alt={name} />
      </ImageContainer>
      <Details>
        <div>
          <p style={{ margin: "2px 0", color: "gray", overflow: "hidden"}}>{name}</p>
          <h3 style={{ margin: "5px 0" }}>${price}</h3>
        </div>
        <ByButton>Shop Now</ByButton>
      </Details>
    </Container>
  );
}

export default Card;
