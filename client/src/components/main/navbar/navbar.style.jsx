import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as logo } from "../../../assets/constants/logo.svg";
import { ReactComponent as love } from "../../../assets/constants/love.svg";
import { ReactComponent as person } from "../../../assets/constants/person.svg";
import { ReactComponent as search } from "../../../assets/constants/search.svg";
import { ReactComponent as bag } from "../../../assets/constants/bag.svg";

const iconStyle = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 0 5px;
`;

export const Logo = styled(logo)`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const Love = styled(love)`
  ${iconStyle}
`;
export const Bag = styled(bag)`
  ${iconStyle}
`;
export const Person = styled(person)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0 5px;
`;
export const Search = styled(search)`
  ${iconStyle}
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Container = styled.div`
  width: 100vw;
  height: 90px;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3vw;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: nowrap;
`;
export const SearchFiled = styled.input`
  margin: 0 2px;
  border: 1px solid gray;
  border-radius: 20px;
  width: auto;
  min-width: 150px;
  max-width: 250px;
  padding: 8px;
  font-size: 18px;
  background-color: whitesmoke;
  outline: none;
  transition: width 0.3 linear, width 0.3s linear;
  display: ${(props) => (props.isDisplay ? "inline" : "none")};
  &:hover,
  &:focus {
    border-color: black;
  }
  @media (max-width: 600px) {
    visibility: visible;
    width: 150px;
  }
  @media (max-width: 350px) {
    display: none;
    width: 150px;
  }
`;
export const NavLink = styled(Link)`
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const BagContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const P = styled.p`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0px 3px;
  position: absolute;
  bottom: -14px;
  pointer-events: none;
`;
