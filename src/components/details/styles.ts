import styled from "styled-components";
import { TextDefault } from "../../common/fonts";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba( 5, 5, 5, 0.5);
  position: fixed;
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

  position: fixed;

  display: flex;
  z-index: 99;

  overflow-block: unset;
  position: absolute;
`;

export const GridIcon = styled.div`
  position: absolute;
  right: 8px;
  z-index: 99;
`;

export const ContainerImage = styled.div`
  width: 20%;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px 0 0 0;
`;

export const ContainerDescriptionHeader = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const ContainerDescription = styled.div`
  width: 100%;
  border-radius: 0 8px 8px 0;
  padding: 16px;

  position: relative;
`;


export const Title = styled(TextDefault)`
  font-size: 22px;
  font-weight: bold;
  color: black;

  cursor: default;
`;

export const ContainerSubs = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;


`;

export const SubTitle = styled(TextDefault)<{ selected: boolean, children: string}>`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  color: ${(props) => props.selected ? 'black' : undefined };
  :hover {
    color: black;
  }
`;
