import React from "react";
import { StyledNavBar, StyledNavButton } from "./styles";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavButton>Dodaj Post</StyledNavButton>
      <StyledNavButton>Dodaj Komentarz</StyledNavButton>
      <StyledNavButton>Toggluj kolory</StyledNavButton>
      <StyledNavButton>Wyślij wiadomość</StyledNavButton>
    </StyledNavBar>
  );
};
