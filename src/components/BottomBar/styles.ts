import styled from "styled-components";
import { colors } from "../../../variables";

export const StyledBottomBar = styled.div`
  align-self: flex-end;
  margin-bottom: 8vh;
  width: 90vw;
  height: 5vh;
  background-color: ${colors.textBackground};
  display: flex;
  flex-direction: row;
`;

export const StyledIcon = styled.button`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  background-color: ${colors.textBackground};
`;
