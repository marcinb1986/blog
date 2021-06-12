import styled from "styled-components";
import { colors } from "../../../variables";

export const StyledPostWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.inputBackground};
  width: 90vw;
  height: 75vh;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

export const StyledPost = styled.p`
  align-self: flex-start;
`;
