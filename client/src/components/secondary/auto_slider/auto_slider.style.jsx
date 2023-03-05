import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 100%;
  margin: 10px;
  display: flex;
  gap: 5px;
  position: relative;
  &:hover {
      flex-direction: column;
    }
`;
export const Card = styled.div`
    height: 100%;
    width: 18%;
    object-fit: cover;
    border-radius: 5px;
    margin: 5px;
    &:nth-child(1) {
        height: 85%;
    }
    &:nth-child(2) {
        margin-top: 2px;
        font-size: 20px;
    }
    @media (max-width: 350px) {
    width: 90%;
  }
`