import styled from "styled-components";
import { TextDefault } from "../../../common/fonts";

export const CardContainer = styled.div``;




export const Title = styled(TextDefault)`
  font-size: 18px;
  font-weight: bold;
  padding: 16px 0;
`;

export const Body = styled.div`
  padding: 8px;
  width: calc(100% - 36px);
  height: calc(100% - 56px);
  position: absolute;

  overflow-y: scroll;
`;

export const Item = styled.div`
  padding: 8px;
`;

export const TextName = styled(TextDefault)`
  font-size: 14px;
  font-weight: 400;

  cursor: default;

  :hover {
    color: black;
  }
`;