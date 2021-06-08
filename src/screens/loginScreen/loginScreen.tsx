import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components/Wrapper/styles";

import {
  StyledSection,
  StyledDiv,
  StyledInput,
  StyledButton,
  StyledButton2,
  StyledParagraph,
} from "../loginScreen/styles";

export const LoginScreen = () => {
  return (
    <Wrapper>
      <StyledSection>
        <StyledDiv>
          <StyledParagraph>Log in to the blog</StyledParagraph>
        </StyledDiv>
        <StyledInput type="email" placeholder="type Your mail" />
        <StyledInput type="password" placeholder="type Your password" />
        <StyledButton>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <StyledParagraph>Go</StyledParagraph>
          </Link>
        </StyledButton>
      </StyledSection>

      <StyledSection>
        <StyledDiv>
          <StyledParagraph>Go to blog without logging in</StyledParagraph>
        </StyledDiv>
        <StyledButton2>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <StyledParagraph>Go without</StyledParagraph>
          </Link>
        </StyledButton2>
      </StyledSection>
    </Wrapper>
  );
};
