import * as React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";

import "../css/SettingsModal.css";

const marks = [
  {
    value: 0,
    label: "Easy",
  },
  {
    value: 1,
    label: "Medium",
  },
  {
    value: 2,
    label: "Hard",
  },
  {
    value: 3,
    label: "Extreme",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 2,
  bgcolor: "#424242",
  color: "#ffffff",
  boxShadow: 24,
  p: 4,
};

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function Settings(props) {
  return (
    <Modal
      aria-labelledby="settings-modal"
      aria-describedby="settings-modal"
      open={props.settingsOpen}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.settingsOpen}>
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={props.handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" component="h2">
            Settings
          </Typography>

          <Divider sx={{ mt: 2, mb: 2 }}></Divider>

          <Typography variant="button">DIFFICULTY</Typography>
          <Box sx={{ pl: 2, pr: 2 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={0}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              min={0}
              max={3}
            />
          </Box>

          <Divider sx={{ mt: 2, mb: 2 }}></Divider>

          <div className="switch-container">
            <Typography variant="button">
              Enable Teamfight-Tactics related words
            </Typography>

            <div className="switch-button">
              <Switch defaultChecked />
            </div>
          </div>

          <Divider sx={{ mt: 2, mb: 2 }}></Divider>

          <div className="switch-container">
            <Typography variant="button">Dark theme</Typography>

            <div className="switch-button">
              <Switch />
            </div>
          </div>

          <Divider sx={{ mt: 2, mb: 4 }}></Divider>

          <Typography variant="overline">
            Made with love by Astris and Riyce ❤️
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
