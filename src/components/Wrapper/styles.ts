import { colors } from "../../../variables";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${colors.mainBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  align-content: center;
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 10vw;
  border: 2px solid white;
  width: 50vh;
  height: 50vh;
  border-radius: 5px;
  padding: 2vh;
`;

export const StyledDiv = styled.div`
  background-color: ${colors.textBackground};
  padding-bottom: 15px;
  width: 36vh;
  height: 4vh;
  border-radius: 5px;
  margin: 5vh;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-weight: 700;
  font-family: sans-serif;
`;
export const StyledInput = styled.input`
  width: 36vh;
  background-color: ${colors.textBackground};
  height: 4vh;
  border-radius: 5px;
  margin: 1vh;
  text-align: center;
  border: white;
`;

export const StyledButton = styled.button`
  width: 12vh;
  background-color: ${colors.buttonColor};
  height: 4vh;
  margin-top: 5vh;
  border-radius: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: white;

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
  }
`;

export const StyledButton2 = styled.button`
  width: 12vh;
  background-color: ${colors.buttonColor};
  height: 4vh;
  margin-top: 1vh;
  border-radius: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: white;

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
  }
`;
