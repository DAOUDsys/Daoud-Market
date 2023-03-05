import Card from "../../secondary/card/card";
import MainSlider from "../../secondary/main_slider/main_slider";
import { CardsContainer, SubTitle, Container } from "./home.style.jsx";
import speaker from "../../../assets/constants/speaker1.png";
import headphone from "../../../assets/constants/earphones_a_4.webp";
import appleWatch from "../../../assets/constants/watch_3.webp";
import shoe1 from "../../../assets/constants/shoe1.png";
import shoe2 from "../../../assets/constants/shoe2.png";
import hoodie1 from "../../../assets/constants/hoodie1.png";
import hoodie2 from "../../../assets/constants/hoodie2.png";
import aj from "../../../assets/constants/Angelina-Jolie.png";
import AutoSlider from "../../secondary/auto_slider/auto_slider";
import { useSelector} from 'react-redux';


function Home() {

  
  const cards = useSelector((state) => state.product.bestSillier)

  return (
    <Container>
      <MainSlider />
      <SubTitle>Best Seller Products</SubTitle>
      <CardsContainer>
        <Card image={speaker} name="Samsung BT speaker" price={20} />
        <Card image={headphone} name="Xiaomi phones" price={19} />
        <Card image={appleWatch} name="Apple watch 4" price={300} />
        <Card image={shoe1} name="Nike Running Shoes" price={149} />
        <Card image={shoe2} name="Nike 574 sport shoes" price={199} />
        <Card image={hoodie1} name="kisspng mexico hoodie" price={79} />
        <Card image={hoodie2} name="Raincoat Columbia Sportswear" price={110} />
        <Card image={aj} name="Angelina-Jolie" price={2000} />
      </CardsContainer>
      <SubTitle>NEW ARRIVALS</SubTitle>
      <AutoSlider cards={cards} />

    </Container>
  );
}

export default Home;
