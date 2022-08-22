import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import CounterHook from "../hooks/CounterHook";
import { Logo } from "./Images";

export const Header = () => {
  const [score, setScore] = useState(0);

  const onWin = () => {
    setScore((prevValue) => prevValue + 1);
  };

  return (
    <CounterHook.Provider value={{ score, onWin }}>
      <Grid
        container
        item
        xs={10}
        sm={6}
        className="Header"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Logo />
        </Grid>

        <Grid item xs={3} className="Scoreboard">
          <Typography variant="body1" align="center">
            Score
          </Typography>
          <Typography variant="h3" align="center">
            {score}
          </Typography>
        </Grid>
      </Grid>
    </CounterHook.Provider>
  );
};
