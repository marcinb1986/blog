import React, { useState, useEffect } from "react";
import { StyledClock } from "./styles";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(time);
    };
  }, [time]);

  const tick = () => {
    setTime(new Date());
  };

  return <StyledClock>Dzisiaj jest : {time.toLocaleString()}</StyledClock>;
};
