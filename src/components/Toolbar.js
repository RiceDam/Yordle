import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

import "../css/Toolbar.css";
import StatisticsModal from "./StatisticsModal";
import SettingsModal from "./SettingsModal";
import HowToPlayModal from "./HowToPlayModal";

export default function ButtonAppBar() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [statisticsOpen, setStatisticsOpen] = useState(false);

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleHowToPlayOpen = () => {
    setHowToPlayOpen(true);
  };

  const handleStatisticsOpen = () => {
    setStatisticsOpen(true);
  };

  const handleClose = () => {
    setSettingsOpen(false);
    setHowToPlayOpen(false);
    setStatisticsOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon></MenuIcon>
          </IconButton>

          <IconButton
            onClick={handleHowToPlayOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1 }}
          >
            <HelpIcon></HelpIcon>
          </IconButton>

          <HowToPlayModal
            howToPlayOpen={howToPlayOpen}
            handleClose={() => handleClose()}
          ></HowToPlayModal>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yordle
          </Typography>
          <IconButton
            onClick={handleStatisticsOpen}
            size="large"
            edge="end"
            color="inherit"
            sx={{ mr: 1 }}
            aria-label="menu"
          >
            <LeaderboardIcon></LeaderboardIcon>
          </IconButton>

          <StatisticsModal
            statisticsOpen={statisticsOpen}
            handleClose={() => handleClose()}
          ></StatisticsModal>

          <IconButton
            onClick={handleSettingsOpen}
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <SettingsIcon></SettingsIcon>
          </IconButton>

          <SettingsModal
            settingsOpen={settingsOpen}
            handleClose={() => handleClose()}
          ></SettingsModal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
