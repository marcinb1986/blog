import { colors } from "../../../variables";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${colors.mainBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  align-content: center;
  font-family: sans-serif;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  flex: 1;
  margin: 10vw;
  border: 2px solid gray;
  width: 90vw;
  border-radius: 5px;
`;

export const StyledDiv = styled.div`
  background-color: ${colors.textBackground};
  padding-bottom: 15px;
  width: 65vw;
  height: 4vh;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 35px -4px rgba(41, 82, 230, 0.51);
  box-shadow: 0px 0px 35px -4px rgba(41, 82, 230, 0.51);
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-weight: 700;
  font-family: sans-serif;
`;
export const StyledInput = styled.input`
  width: 80vw;
  background-color: ${colors.textBackground};
  height: 4vh;
  border-radius: 5px;
  margin: 1vh;
  text-align: center;
  -webkit-box-shadow: 0px 0px 35px -4px rgba(41, 82, 230, 0.51);
  box-shadow: 0px 0px 35px -4px rgba(41, 82, 230, 0.51);
`;

export const StyledButton = styled.button`
  width: 12vh;
  background-color: ${colors.buttonColor};
  -webkit-box-shadow: 0px 0px 35px -4px rgba(237, 38, 38, 0.51);
  box-shadow: 0px 0px 35px -4px rgba(237, 38, 38, 0.51);
  height: 4vh;
  margin-top: 5vh;
  border-radius: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  & :hover {
    background-color: hotpink;
  }
`;
