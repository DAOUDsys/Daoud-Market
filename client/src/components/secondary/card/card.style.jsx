import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  max-width: 400px;
  height: 300px;
  padding: 0px;
  margin: 0 15px 15px 15px;
  text-align: center;
  justify-content: center;
  background-color: transparent;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
export const ImageContainer = styled.div`
  min-width: 300px;
  max-width: 400px;
  height: 80%;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
  overflow: hidden;
  border-radius: 5%;
  margin-bottom: 5px;
`;
export const ImageFiled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
  background-color: #b9b3b34b;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
  }
`;
export const Details = styled.image`
  display: flex;
  text-align: start;
  justify-content: space-between;
`;
export const ByButton = styled.button`
  color: white;
  background-color: #ff7dd4;
  height: 30px;
  width: 80px;
  border-radius: 10px;
  margin-right: 10px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
