import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  margin: 30px 0;
  min-width: 300px;
  justify-self: center;
`;
export const SubTitle = styled.h1`
  color: #404b52;
`;
