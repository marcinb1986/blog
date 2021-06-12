import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

import { WrapperLogin } from "../../components/WrapperLogin/styles";

import {
  StyledSection,
  StyledDiv,
  StyledInput,
  StyledButton,
  StyledButton2,
  StyledParagraph,
  StyledComment,
} from "../loginScreen/styles";

export const LoginScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const duration = 500;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <WrapperLogin>
      <StyledSection>
        <StyledDiv>
          <StyledParagraph>Zaloguj i idź do bloga</StyledParagraph>
        </StyledDiv>
        <StyledInput type="email" placeholder="type Your mail" />
        <StyledInput type="password" placeholder="type Your password" />
        <StyledButton>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <StyledParagraph>Idź</StyledParagraph>
          </Link>
        </StyledButton>
      </StyledSection>

      <StyledSection>
        <StyledDiv>
          <StyledParagraph>Idź bez logowania</StyledParagraph>
        </StyledDiv>
        <StyledButton2
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <Link to="/main" style={{ textDecoration: "none" }}>
            <StyledParagraph>Idź bez </StyledParagraph>
          </Link>
          <Transition in={isVisible} timeout={duration}>
            {(state) => (
              <StyledComment
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                {"Bez logowania nie wstawisz komentarza "}
              </StyledComment>
            )}
          </Transition>
        </StyledButton2>
      </StyledSection>
    </WrapperLogin>
  );
};
