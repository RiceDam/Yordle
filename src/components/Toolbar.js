import * as React from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

import "../css/Toolbar.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>

          <IconButton
            onClick={handleOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HelpIcon></HelpIcon>
          </IconButton>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
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
                  How to play
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Guess the <b>YORDLE</b> in six tries.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Each guess must be a valid five-letter word. Hit the enter
                  button to submit.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  After each guess, the color of the tiles will change to show
                  how close your guess was to the word.
                </Typography>

                <Divider sx={{ mt: 2, mb: 2 }}></Divider>

                <Typography sex={{ mb: 2 }} variant="h6" component="h2">
                  Example
                </Typography>

                <div class="modal-words-container">
                  <Box
                    p={2}
                    component="span"
                    sx={{ backgroundColor: "#6fbf73" }}
                  >
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      B
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      R
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      A
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      N
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      D
                    </Typography>
                  </Box>
                </div>
                <Typography sx={{ mt: 2 }}>
                  The letter <b>B</b> is in the word and in the correct spot.
                </Typography>

                <div class="modal-words-container">
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      C
                    </Typography>
                  </Box>
                  <Box
                    p={2}
                    component="span"
                    sx={{ backgroundColor: "#ffd54f" }}
                  >
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      O
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      R
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      K
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      I
                    </Typography>
                  </Box>
                </div>
                <Typography sx={{ mt: 2 }}>
                  The letter <b>O</b> is in the word but in the wrong spot.
                </Typography>

                <div class="modal-words-container">
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      G
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      A
                    </Typography>
                  </Box>
                  <Box
                    p={2}
                    component="span"
                    sx={{ backgroundColor: "#bdbdbd" }}
                  >
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      L
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      I
                    </Typography>
                  </Box>
                  <Box p={2} component="span">
                    <Typography sx={{ mt: -0.5 }} variant="h6">
                      O
                    </Typography>
                  </Box>
                </div>
                <Typography sx={{ mt: 2 }}>
                  The letter <b>L</b> is not in the word in any spot.
                </Typography>

                <Divider sx={{ mt: 2, mb: 2 }}></Divider>

                <Typography sx={{ mt: 2 }}>
                  A new <b>YORDLE</b> will be available each day!
                </Typography>
              </Box>
            </Fade>
          </Modal>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yordle
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            sx={{ mr: 0.25 }}
            aria-label="menu"
          >
            <LeaderboardIcon></LeaderboardIcon>
          </IconButton>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <SettingsIcon></SettingsIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
