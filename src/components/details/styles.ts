import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #979797;  
  opacity: 0.8;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 80%;
  height: 80%;

  background-color: white;
  border-radius: 8px;
  padding: 8px;

  position: absolute;
`;

export const GridIcon = styled.div`
  position: absolute;
  right: 8px;

`;