import React, { useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "./style";
import { useTheme } from "@mui/material/styles";

const ProductCategory = () => {
  const theme = useTheme();
  const style = styles(theme);

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
                      Delivery Address (Edit)
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
              ...style.accordiansummary,
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
                <Box>
                  <Typography sx={style.activeRfqtypoassignee}>
                    Total Weight
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails></AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCategory;
