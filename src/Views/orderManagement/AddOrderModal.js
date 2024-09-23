import React from "react";
import { Modal, Box, Grid } from "@mui/material";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";

const AddOrderModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const styless = styles(theme);

  const style = {
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
          onClick: (event) => event.stopPropagation(),
        }}
      >
        <Box sx={style.modalBox}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={styless.displayFlex}>
                  <Box sx={styless.doneiconBox}>
                    <DoneIcon sx={styless.DoneIcon} />
                  </Box>
                </Box>

                <Box sx={styless.OrderAdd}>Your Order Added</Box>
                <Box sx={styless.displayFlex}>
                  <Box sx={styless.okayButton} onClick={handleClose}>
                    Ok
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

export default AddOrderModal;
