import { colors } from "../../../variables";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 10vw;
  border: 2px solid white;
  width: 30vw;
  height: 30vw;
  border-radius: 5px;
  padding: 2vh;
`;

export const StyledDiv = styled.div`
  background-color: ${colors.textBackground};
  padding-bottom: 1vh;
  width: 20vw;
  height: 3vw;
  border-radius: 5px;
  margin: 5vh;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-weight: 700;
  font-family: sans-serif;
`;
export const StyledInput = styled.input`
  width: 20vw;
  background-color: ${colors.inputBackground};
  height: 40px;
  border-radius: 5px;
  margin: 1vh;
  text-align: center;
  border: ${colors.inputBackground};
`;

export const StyledButton = styled.button`
  width: 8vw;
  background-color: ${colors.buttonColor};
  height: 40px;
  margin-top: 5vh;
  border-radius: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${colors.inputBackground};

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
  }
`;

export const StyledButton2 = styled.button`
  width: 8vw;
  background-color: ${colors.buttonColor};
  height: 40px;
  margin-top: 1vh;
  border-radius: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${colors.inputBackground};

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 16px 15px rgba(52, 235, 76, 0.45);
  }
`;
