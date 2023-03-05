import { useState } from "react";
import { Arrow } from "../main_slider/main_slider.style";
import { Container, Card } from "./auto_slider.style";
import { useDispatch, useSelector } from "react-redux";

function AutoSlider(cards) {
  const [index, setIndex] = useState(cards);
  const readyCards = cards.map((card) => (
    <Card>
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
    </Card>
  ));
  let shownCards = [readyCards[0], readyCards[1], readyCards[2], readyCards[3]];
  const shift = setInterval(function () {
    if (index >= 0) {
    }
  }, 1000);
  const slidePhotosRight = () => {
    setIndex(index + 1);
    if (index === cards.length - 1) setIndex(0);
    shownCards = cards[index];
    setIndex(-1);
  };
  const slidePhotosLeft = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(cards.length - 1);
    shownCards = cards[index];
    setIndex(-1);
  };
  return (
    <Container>
      <Arrow isRight={true} onClick={slidePhotosRight} />
      <Arrow onClick={slidePhotosLeft} />
    </Container>
  );
}

export default AutoSlider;
