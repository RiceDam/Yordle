import * as React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Chart } from "react-chartjs-2";

import "../css/StatisticsModal.css";

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

export default function StatisticsModal(props) {
  return (
    <Modal
      aria-labelledby="statistics-modal"
      aria-describedby="statistics-modal"
      open={props.statisticsOpen}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.statisticsOpen}>
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

          <Typography variant="h6" sx={{ mb: 2 }} component="h2">
            Statistics
          </Typography>

          <div className="statistics-container">
            <div className="statistic">
              <Typography variant="h3" align="center">
                0
              </Typography>
              <Typography variant="subtitle2" align="center">
                PLAYED
              </Typography>
            </div>
            <div className="statistic">
              <Typography variant="h3" align="center">
                0
              </Typography>
              <Typography variant="subtitle2" align="center">
                WIN %
              </Typography>
            </div>
            <div className="statistic">
              <Typography variant="h3" align="center">
                0
              </Typography>
              <Typography variant="subtitle2" align="center">
                CURRENT STREAK
              </Typography>
            </div>
            <div className="statistic">
              <Typography variant="h3" align="center">
                0
              </Typography>
              <Typography variant="subtitle2" align="center">
                MAX STREAK
              </Typography>
            </div>
          </div>

          <Divider sx={{ mt: 2, mb: 2 }}></Divider>

          <Typography variant="h6" sx={{ mb: 2 }} component="h2">
            Guess distribution
          </Typography>

          <Typography variant="button">CHART GOES HERE ????</Typography>

          <Divider sx={{ mt: 2, mb: 2 }}></Divider>

          <Typography variant="h6" sx={{ mb: 2 }} component="h2">
            Guess distribution
          </Typography>

          <Typography variant="button">CHART GOES HERE ????</Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
