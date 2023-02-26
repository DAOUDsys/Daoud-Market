import { useState } from "react";
import { Container, Image, Arrow, Dots, Dot } from "./main_slider.style";
import cover1 from "../../../assets/constants/cover1.jpg";
import cover2 from "../../../assets/constants/cover2.jpg";
import cover3 from "../../../assets/constants/cover3.jpg";
import cover4 from "../../../assets/constants/cover4.jpg";

function MainSlider() {
  const sliderPictures = [cover1, cover2, cover3, cover4];
  const [index, setIndex] = useState(0);
  let certainPicture = sliderPictures[index];

  const slidePhotosRight = () => {
    setIndex(index+1);
    if (index === 3) setIndex(0);
    certainPicture =sliderPictures[index];
  };
  const slidePhotosLeft = () => {
    setIndex(index-1);;
    if (index === 0) setIndex(3);
    certainPicture =sliderPictures[index];
  };

  return (
    <Container>
      <Image src={certainPicture} alt="Cover" />
      <Arrow isRight={true} onClick={slidePhotosRight} />
      <Arrow onClick={slidePhotosLeft} />
      <Dots colored={index}>
        <Dot on={index === 0} onClick={() => setIndex(0)} />
        <Dot on={index === 1} onClick={() => setIndex(1)} />
        <Dot on={index === 2} onClick={() => setIndex(2)} />
        <Dot on={index === 3} onClick={() => setIndex(3)} />
      </Dots>
    </Container>
  );
}

export default MainSlider;
