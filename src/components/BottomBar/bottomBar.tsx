import React from "react";
import { StyledBottomBar, StyledIcon } from "./styles";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";

export const BottomBar = () => {
  const style = { fontSize: "180%" };
  return (
    <StyledBottomBar>
      <StyledIcon>
        <FaFacebookSquare style={style} />
      </StyledIcon>
      <StyledIcon>
        <GrInstagram style={style} />
      </StyledIcon>
      <StyledIcon>
        <CgMail style={style} />
      </StyledIcon>
      <StyledIcon>
        <BiPhoneCall style={style} />
      </StyledIcon>
    </StyledBottomBar>
  );
};
