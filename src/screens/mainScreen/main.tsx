import React, { FC } from "react";
import { WrapperMain } from "../../components/WrapperMain/styles";
import { Clock } from "../../components/Clock/clock";
import { LogoutBtn } from "../../components/LogoutButton/logoutBtn";
import { NavBar } from "../../components/Navbar/navbar";
import { BottomBar } from "../../components/BottomBar/bottomBar";
import { PostsFiled } from "../../components/Post/post";

interface MainProps {}

export const MainScreen: FC<MainProps> = () => {
  return (
    <WrapperMain>
      <Clock />
      <LogoutBtn />
      <NavBar />
      <PostsFiled />
      <BottomBar />
    </WrapperMain>
  );
};
