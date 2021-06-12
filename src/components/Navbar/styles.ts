import styled from "styled-components";
import { colors } from "../../../variables";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  width: 90vw;
  height: 5vh;
`;

export const StyledNavButton = styled.button`
  flex-grow: 1;
  background-color: ${colors.textBackground};
  font-weight: 700;

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      0px 1px 31px 16px rgba(243, 251, 55, 0.47);
    box-shadow: 0px 10px 13px -7px #000000,
      0px 1px 31px 16px rgba(243, 251, 55, 0.47);
    transition: 500ms;
  }
`;
