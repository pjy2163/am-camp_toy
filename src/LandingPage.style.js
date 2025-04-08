import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Message = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #4f46e5;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
