import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 94px);
  position: relative;
  padding: 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: calc(100vh - 94px);
  padding: 0px;
  margin: 0px;
`;
export const Arrow = styled.div`
  height: 40px;
  background-color: transparent;
  width: 40px;
  position: absolute;
  top: calc(50vh - 90px);
  left: ${(props) => props.ri.toString() + "px"};
  border: solid black;
  border-width: ${props => props.isRight ? "0 3px 3px 0" : "3px 0 0 3px"};
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  &:hover {
    border-color: gray;
    cursor: pointer;
  }
`;
export const Dot = styled.div`
  border-radius: 50px;
  color: #b3b2b2;
`
export const Dots = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
`

