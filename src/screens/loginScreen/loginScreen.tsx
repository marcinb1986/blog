import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  StyledSection,
  StyledDiv,
  StyledInput,
  StyledButton,
  StyledParagraph,
} from "../../components/Wrapper/styles";

export const LoginScreen = () => {
  return (
    <Wrapper>
      <StyledSection>
        <StyledDiv>
          <StyledParagraph>Log in to the blog</StyledParagraph>
        </StyledDiv>
        <StyledInput type="email" />
        <StyledInput type="password" />
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
        <StyledButton>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <StyledParagraph>Go without</StyledParagraph>
          </Link>
        </StyledButton>
      </StyledSection>
    </Wrapper>
  );
};
