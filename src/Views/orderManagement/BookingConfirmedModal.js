import React from "react";
import { Modal, Box, Grid, Typography } from "@mui/material";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";

const DeliveryAddress = ({ open, handleClose }) => {
  const theme = useTheme();
  const style = styles(theme);

  const styless = {
    modalBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: 0,
      transform: "translate(-50%, -50%)",
      width: "80%",
      maxWidth: "380px",
      maxHeight: "90vh",
      overflowY: "auto",
      bgcolor: "background.paper",
      boxShadow: 22,
      p: 4,
      borderRadius: "12px",
    },
    backdrop: {
      zIndex: (theme) => theme.zIndex.modal + 0.3,
      backgroundColor: "#33fff30f",
    },
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          sx: { backgroundColor: "#1566db36" },
          onClick: (event) => event?.stopPropagation(),
        }}
      >
        <Box sx={styless.modalBox}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box>
                <Box sx={style.cmnDrawerPadding}>
                  <Close onClick={handleClose} sx={style.cmnDrawerCloseIcon} />
                  <Box sx={style.cmnDrawerHeadBox}>
                    <Typography sx={style.cmnDrawerHeadingText}>
                      Back to order
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeliveryAddress;
