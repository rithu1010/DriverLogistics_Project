import React from "react";
import {
  Modal,
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Button,
} from "@mui/material";
import styles from "./style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTheme } from "@mui/material/styles";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import BookingImg from "../../assets/images/booking.png";

const BookingConfirmation = ({ open, handleClose }) => {
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
      maxWidth: "480px",
      maxHeight: "86vh",
      overflowY: "auto",
      bgcolor: "background.paper",
      "&::-webkit-scrollbar": { display: "none" },
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
                  <CancelPresentationIcon
                    onClick={handleClose}
                    sx={style.cmnDrawerCloseIcon}
                  />

                  <Box sx={style.cmnDrawerHeadBox} onClick={handleClose}>
                    <KeyboardBackspaceIcon sx={style.KeyboardBackspaceIcon} />
                    <Typography sx={style.cmnDrawerHeadingText}>
                      Back to order
                    </Typography>
                  </Box>
                </Box>
                <Box sx={style.BookingConfirmBox}>
                  <Box sx={style.BookingConfirmBox}>
                    <img
                      src={BookingImg}
                      alt="bookingimg"
                      style={{
                        height: "44px",
                        width: "44px",
                        marginTop: "-12px",
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={style.BookingConfirmBox}>
                  <Typography sx={style.bookingconfirmedText}>
                    Your Booking is Confirmed, Thank you!
                  </Typography>
                </Box>
                <Box sx={style.BookingConfirmBox}>
                  <Typography sx={style.bookingconfirmedsubText}>
                    Order confirmation details sent to Mobile and email
                  </Typography>
                </Box>
                <Box sx={{ ...style.BookingConfirmBox, marginTop: "20px" }}>
                  <TableContainer>
                    <Table>
                      <TableHead sx={{ backgroundColor: "#f4f9fc" }}>
                        <TableRow
                          sx={{
                            border: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            colSpan={1}
                            sx={{ padding: "5px 15px 5px 19px" }}
                          >
                            <span
                              style={{
                                color: "#0d0303",
                                fontWeight: "550",
                                opacity: "0.7",
                              }}
                            >
                              Booked on 20-03-2024
                            </span>
                          </TableCell>
                          <TableCell sx={{ padding: "0px 15px 0px 15px" }}>
                            {" "}
                            Ernakulam Unit Hub
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              AWS ID
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              RTBLR98752
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              From{" "}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              Fortlachi682001
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              So{" "}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              Kasaragod-671121
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              Total Distance
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              612kmm
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              Product Category
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              Electronics
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              Amount Paid
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              ₹1296700
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            borderLeft: "1px solid #1b1b1b0a",
                          }}
                        >
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              padding: "15px 15px 15px 15px",
                            }}
                          >
                            <Typography sx={style.tablecellmain}>
                              EST Delivery Date
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ padding: "15px 15px 15px 15px" }}>
                            <Typography sx={style.tablecellmain1}>
                              ORD123456
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{
                              borderRight: "1px solid #1b1b1b0a",
                              borderLeft: "1px solid #1b1b1b0a",
                              padding: "10px 15px 10px 15px",
                            }}
                            colSpan={2}
                          >
                            <Box sx={{ display: "flex" }}>
                              <AddCircleOutlineIcon
                                sx={style.AddCircleOutlineIcon}
                              />
                              <Typography sx={style.tablecellmain2}>
                                Create an another order
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Button sx={style.confirmButton}>
                      View Order confirmation
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button sx={style.confirmButtonborder}>
                      Download Receipt{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default BookingConfirmation;
