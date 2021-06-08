import React, { FC } from "react";
import { Wrapper } from "../../components/Wrapper/styles";
import { Clock } from "../../components/Clock/clock";

interface MainProps {}

export const MainScreen: FC<MainProps> = () => {
  return (
    <Wrapper>
      <Clock />
    </Wrapper>
  );
};
