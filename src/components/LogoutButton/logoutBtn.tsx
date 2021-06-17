import React from "react";
import { StyledLogoutButton } from "../../components/LogoutButton/styles";
import { logOutAction } from "../../store/store";
import { useDispatch } from "react-redux";
import { StyledParagraph } from "../../screens/loginScreen/styles";
import { Link } from "react-router-dom";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logOutAction.logOut());
  };

  return (
    <StyledLogoutButton onClick={onLogoutHandler}>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <StyledParagraph>Logout</StyledParagraph>
      </Link>
    </StyledLogoutButton>
  );
};
