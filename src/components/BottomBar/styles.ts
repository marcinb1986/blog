import styled from "styled-components";
import { colors } from "../../../variables";

export const StyledBottomBar = styled.div`
  align-self: center;
  justify-self: flex-end;
  width: 90vw;
  height: 5vh;
  background-color: ${colors.textBackground};
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const StyledIcon = styled.button`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  background-color: ${colors.textBackground};
  font-size: 1rem;
  transition: 0.5s;
  &:hover {
    font-size: 220%;
  }
`;
