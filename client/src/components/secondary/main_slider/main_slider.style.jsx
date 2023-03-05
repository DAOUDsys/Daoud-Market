import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 94px);
  position: relative;
  padding: 0px;
  overflow: hidden;
  @media (max-width: 600px) {
    height: 200px;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  @media (max-width: 600px) {
    object-fit: cover;
    height: 200px;
  }
`;
export const Arrow = styled.div`
  height: 40px;
  background-color: transparent;
  width: 40px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: ${(props) => (props.isRight ? "93%" : "5%")};
  border: solid black;
  border-width: ${(props) => (props.isRight ? "0 3px 3px 0" : "3px 0 0 3px")};
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  &:hover {
    border-color: gray;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    left: ${(props) => (props.isRight ? "85%" : "5%")};
  }
`;
export const Dot = styled.div`
  height: 15px;
  width: 15px;
  margin: 0 10px;
  border-radius: 50px;
  background-color: ${(props) => (props.on ? "gray" : "#c7c3c3")};
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;
export const Dots = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: none;
  }
`;
