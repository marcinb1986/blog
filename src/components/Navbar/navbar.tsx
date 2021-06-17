import React from "react";
import { StyledNavBar, StyledNavButton } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const NavBar = () => {
  const loggedIn = useSelector((state: RootState) => state.loggedIn.loggedIn);

  return (
    <StyledNavBar>
      <StyledNavButton>Dodaj Post</StyledNavButton>
      {loggedIn && <StyledNavButton>Dodaj Komentarz</StyledNavButton>}
      <StyledNavButton>Toggluj kolory</StyledNavButton>
      <StyledNavButton>Wyślij wiadomość</StyledNavButton>
    </StyledNavBar>
  );
};
