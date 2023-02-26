import { useRef } from 'react';
import { Container, Image, Arrow } from "./main_slider.style";
import cover1 from "../../../assets/constants/cover1.jpg"
import cover2 from "../../../assets/constants/cover2.jpg"
import cover3 from "../../../assets/constants/cover3.jpg"
import cover4 from "../../../assets/constants/cover4.jpg"

function MainSlider() {
    const sliderPictures = [cover1,cover2,cover3,cover4];
    let i = 0;
    let certainPicture = sliderPictures[i];
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const rightSlide = () => {
        console.log(windowSize);
        
        certainPicture=sliderPictures[(i+1)%sliderPictures.length];   
    }
    
  return <Container>
    <Image src={certainPicture} alt="Cover"/>
    <Arrow ri={windowSize.current[0]-100} isRight={true} onClick={rightSlide}/>
    <Arrow ri={50} />
  </Container>;
}

export default MainSlider;
