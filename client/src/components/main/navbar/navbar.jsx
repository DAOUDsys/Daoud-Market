import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Logo,
  Container,
  Search,
  Love,
  Person,
  Bag,
  SearchFiled,
  NavLink,
  P,
  BagContainer,
} from "./navbar.style.jsx";
import { Icons } from "./navbar.style";

function Navbar() {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [noOfItems, setNoOfItems] = useState(5);
  

  const navigate = useNavigate();

  const handleChange = (e) => setSearchValue(e.target.value);
  const handleLogoClick = () => {
    if (window.location.pathname === "/") window.location.reload(true);
    else navigate("/");
  };

  return (
    <Container>
      <Logo onClick={handleLogoClick} />
      <div>
        <NavLink to="/category/men">CLOTHING</NavLink>
        <NavLink to="/category/women">ELECTRONICS</NavLink>
        <NavLink to="/category/men">SMART HOME</NavLink>
        <NavLink to="/category/men">NEW IN</NavLink>
      </div>
      <Icons>
        <SearchFiled
        placeholder="Search"
          autoFocus
          onChange={handleChange}
          isDisplay={displaySearch}
        />
        <Search onClick={() => setDisplaySearch(!displaySearch)} />
        
          <BagContainer onClick={() => navigate("/:id/cart")}>
            <Bag />
            {noOfItems > 0 ? <P>{noOfItems}</P> : (<></>)}
          </BagContainer>
          <Love onClick={() => navigate("/:id/favorite")} />
          <Person onClick={() => navigate("/:id")} />
      </Icons>
    </Container>
  );
}

export default Navbar;
