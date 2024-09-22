import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Checkbox,
  Button,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "./style";
import { useTheme } from "@mui/material/styles";
import EditOrderSummaryModal from "./editorderSummary";

const ProductCategory = () => {
  const theme = useTheme();
  const style = styles(theme);

  const [expanded, setExpanded] = useState("panel1");
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box sx={style.ordersummaryBox}>
        {/* Accordian 1 */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            ...style.accordiansummary,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={style.ExpandMoreIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={style.AccordionSummary}
          >
            <Box sx={style.activeJobsListBox1}>
              <Box style={{ display: "flex" }}>Order Summary</Box>
              <Box>
                <Typography sx={style.activeRfqtypoassignee}>
                  Total Distance 56kms
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box sx={{ marginTop: "-4px" }}>
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Pickup Address
                      {""}
                      <span
                        style={{ color: "#3933e7", cursor: "pointer" }}
                        onClick={handleOpen}
                      >
                        &nbsp;(Edit)
                      </span>
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      Burger St, near Police Staticnort Nagar, Fort Kachi, Koch,
                      Kerala 682001, India
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Pickup Contact details
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      lack Goe +91 9876543210 | jark goe15215@gmail.com
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Pickup Time & Date
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      24/07/2024 | 16:00-20:00
                    </Typography>
                  </Box>

                  <Divider
                    sx={{
                      ...style.Divider,
                      marginBottom: "12px",
                    }}
                  />
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Delivery Address{""}
                      <span style={{ color: "#3933e7", cursor: "pointer" }}>
                        &nbsp;(Edit)
                      </span>
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      G/40, Mattanchery Cochin, Jew Town Rd, Emakulam, Kochi,
                      Kerala 682202, India
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Delivery Contact details
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      Napier +91 9876543210 | napier 5215@gmail.com
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Product category
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      Electronics
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={style.mainTitlesummary}>
                      Load category
                    </Typography>
                    <Typography sx={style.subTitlesummary}>
                      Cartoon Box
                    </Typography>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    ...style.Divider,
                    marginRight: "-12px",
                    marginLeft: "-12px",
                  }}
                />

                <Box>
                  <Grid container spacing={0.5}>
                    <Grid item xs={0.9}>
                      <ErrorOutlineIcon sx={style.ErrorOutlineIcon} />
                    </Grid>
                    <Grid item xs={11.1}>
                      <Typography sx={style.warningtext}>
                        The estimated cost may vary from the final shipping cost
                        based on the packaged dimensions & weight measured
                        before delivery.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* Accordian 2 */}

        <Box sx={{ marginTop: "12px" }}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              ...style.paymentsummary,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={style.ExpandMoreIcon} />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={style.AccordionSummary}
            >
              <Box sx={style.activeJobsListBox1}>
                <Box style={{ display: "flex" }}>Payment Summary</Box>
                <Box sx={{ marginRight: "18px" }}>
                  <Typography sx={style.activeRfqtypoassignee}>
                    Total Weight
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Box>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow sx={{ borderTop: "1px solid #1b1b1b0a" }}>
                        <TableCell
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            paddingRight: 1,
                            padding: 0,
                          }}
                        >
                          <Typography sx={style.tablecellmain}>
                            Total Shipment Count
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ paddingLeft: 1 }}>
                          <Typography sx={style.tablecellmain1}>
                            10.00
                          </Typography>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            paddingRight: 1,
                            padding: 0,
                          }}
                        >
                          <Typography sx={style.tablecellmain}>
                            Base Freight Amount
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ paddingLeft: 1 }}>
                          <Typography sx={style.tablecellmain1}>
                            10.00
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            paddingRight: 1,
                            padding: 0,
                          }}
                        >
                          <Typography sx={style.tablecellmain}>
                            Accessorial freight amount
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ paddingLeft: 1 }}>
                          <Typography sx={style.tablecellmain1}>
                            546kg
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            paddingRight: 1,
                            padding: 0,
                          }}
                        >
                          <Typography sx={style.tablecellmain}>
                            Docket Charge
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ paddingLeft: 1 }}>
                          <Typography sx={style.tablecellmain1}>
                            ₹2,01600
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            paddingRight: 1,
                            padding: 0,
                          }}
                        >
                          <Typography sx={style.tablecellmain}>
                            Stationary Charge
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ paddingLeft: 1 }}>
                          <Typography sx={style.tablecellmain1}>
                            #50:00
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{
                            borderRight: "1px solid #1b1b1b0a",
                            paddingRight: 1,
                            padding: 0,
                          }}
                        >
                          <Typography sx={style.tablecellmain}>
                            Handling Charge Per Box
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ paddingLeft: 1 }}>
                          <Typography sx={style.tablecellmain1}>
                            #500.00
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ marginTop: "-2px" }}>
          <Box sx={style.volumetricBox}>
            <Grid container spacing={1}>
              <Grid item xs={7.6}>
                <Typography sx={style.totalweight}>Total Weight</Typography>
              </Grid>
              <Grid item xs={4.4}>
                <Typography sx={style.totalweight1}>118kg</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ marginTop: "-2px" }}>
          <Box sx={style.subtotalBox}>
            <Grid container spacing={1}>
              <Grid item xs={7.6}>
                <Typography sx={style.totalweight}>SUB Total</Typography>
              </Grid>
              <Grid item xs={4.4}>
                <Typography sx={style.totalweight1}>₹ 2976.00</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={0}>
            <Grid item sx={1}>
              <Box>
                <Checkbox defaultChecked style={{ color: "#000080" }} />
              </Box>{" "}
            </Grid>
            <Grid item sx={11}>
              <Box>
                <Typography sx={style.termsandconditions}>
                  I agree to the terms and conditions
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={12}>
              <Box sx={{ padding: "2px 10px 0px 10px" }}>
                <Typography sx={style.termsandconditions1}>
                  by Checking this box, I confirm that I have read and agree to
                  abide by the terms governing this transaction, induding refurd
                  and cancellation policies
                </Typography>
              </Box>
            </Grid>

            <Grid item sx={12}>
              <Box sx={{ padding: "2px 10px 0px 10px" }}>
                <Button sx={style.payButon}>Pay INR 2976.00</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <EditOrderSummaryModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default ProductCategory;
