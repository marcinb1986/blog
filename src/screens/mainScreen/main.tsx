import React, { FC } from "react";
import { Wrapper } from "../../components/Wrapper/styles";
import { Clock } from "../../components/Clock/clock";
import { NavBar } from "../../components/Navbar/navbar";
import { BottomBar } from "../../components/BottomBar/bottomBar";

interface MainProps {}

export const MainScreen: FC<MainProps> = () => {
  return (
    <Wrapper>
      <Clock />
      <NavBar />
      <BottomBar />
    </Wrapper>
  );
};
