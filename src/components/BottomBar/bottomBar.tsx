import React from "react";
import { StyledBottomBar } from "./styles";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { StyledIcon } from "../BottomBar/styles";

export const BottomBar = () => {
  return (
    <StyledBottomBar>
      <StyledIcon>
        <FaFacebookSquare />
      </StyledIcon>
      <StyledIcon>
        <GrInstagram />
      </StyledIcon>
      <StyledIcon>
        <CgMail />
      </StyledIcon>
      <StyledIcon>
        <BiPhoneCall />
      </StyledIcon>
    </StyledBottomBar>
  );
};
