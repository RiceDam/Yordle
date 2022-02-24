import * as React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "../css/HowToPlayModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 2,
  bgcolor: "#424242",
  boxShadow: 24,
  color: "#ffffff",
  p: 4,
};

export default function HowToPlayModal(props) {
  return (
    <Modal
      aria-labelledby="how-to-play-modal"
      aria-describedby="how-to-play-modal"
      open={props.howToPlayOpen}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.howToPlayOpen}>
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
            How to play
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Guess the <b>YORDLE</b> in six tries.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </Typography>

          <Divider sx={{ mt: 2, mb: 2 }}></Divider>

          <Typography sex={{ mb: 2 }} variant="h6" component="h2">
            Example
          </Typography>

          <div className="modal-words-container">
            <Box p={2} component="span" sx={{ backgroundColor: "#388e3c" }}>
              <Typography sx={{ mt: -0.5 }} variant="h5">
                B
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                R
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                A
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                N
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                D
              </Typography>
            </Box>
          </div>
          <Typography sx={{ mt: 2 }}>
            The letter <b>B</b> is in the word and in the correct spot.
          </Typography>

          <div className="modal-words-container">
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                C
              </Typography>
            </Box>
            <Box p={2} component="span" sx={{ backgroundColor: "#ffab00" }}>
              <Typography sx={{ mt: -0.5 }} variant="h5">
                O
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                R
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                K
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                I
              </Typography>
            </Box>
          </div>
          <Typography sx={{ mt: 2 }}>
            The letter <b>O</b> is in the word but in the wrong spot.
          </Typography>

          <div className="modal-words-container">
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                G
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                A
              </Typography>
            </Box>
            <Box p={2} component="span" sx={{ backgroundColor: "#9e9e9e" }}>
              <Typography sx={{ mt: -0.5 }} variant="h5">
                L
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
                I
              </Typography>
            </Box>
            <Box p={2} component="span">
              <Typography sx={{ mt: -0.5 }} variant="h5">
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
  );
}
