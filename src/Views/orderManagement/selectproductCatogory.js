import React, { useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
import SpeakerIcon from "@mui/icons-material/Speaker";

const ProductCategory = () => {
  const theme = useTheme();
  const style = styles(theme);

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Box sx={style.productcategrory}>
        {/* Accordian 1 */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor:
              expanded === "panel1" ? "transparent" : "#33fff30f",
            boxShadow:
              expanded === "panel1" ? "2px 3px 4px 2px #1b1b1b17" : "none",

            ...style.accordian,
          }}
        >
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={style.AccordionSummary}
          >
            Select Product Category
          </AccordionSummary>
          <Divider sx={{ ...style.Divider, marginBottom: "12" }} />

          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item xs={2.4}>
                <Box sx={style.selectcategoryBox}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <SpeakerIcon sx={style.SpeakerIcon} />
                  </Box>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={style.categoryText}>Consumables</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box sx={style.selectcategoryBox}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <SpeakerIcon sx={style.SpeakerIcon} />
                  </Box>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={style.categoryText}>Consumables</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box sx={style.selectcategoryBox}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <SpeakerIcon sx={style.SpeakerIcon} />
                  </Box>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={style.categoryText}>
                      Sports Equipments
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box sx={style.selectcategoryBox}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <SpeakerIcon sx={style.SpeakerIcon} />
                  </Box>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={style.categoryText}>Cloth Items</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box sx={style.selectcategoryBox}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <SpeakerIcon sx={style.SpeakerIcon} />
                  </Box>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={style.categoryText}>Other</Typography>
                  </Box>
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
              backgroundColor:
                expanded === "panel2" ? "transparent" : "#33fff30f",
              boxShadow:
                expanded === "panel2" ? "2px 3px 4px 2px #1b1b1b17" : "none",
              ...style.accordian,
            }}
          >
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
              sx={style.AccordionSummary}
            >
              Select Load Type
            </AccordionSummary>
            <Divider sx={{ ...style.Divider, marginBottom: "12" }} />

            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={2.4}>
                  <Box sx={style.selectcategoryBox}>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <SpeakerIcon sx={style.SpeakerIcon} />
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={style.categoryText}>
                        Consumables
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box sx={style.selectcategoryBox}>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <SpeakerIcon sx={style.SpeakerIcon} />
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={style.categoryText}>
                        Consumables
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box sx={style.selectcategoryBox}>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <SpeakerIcon sx={style.SpeakerIcon} />
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={style.categoryText}>
                        Sports Equipments
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box sx={style.selectcategoryBox}>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <SpeakerIcon sx={style.SpeakerIcon} />
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={style.categoryText}>
                        Cloth Items
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Box sx={style.selectcategoryBox}>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <SpeakerIcon sx={style.SpeakerIcon} />
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={style.categoryText}>Other</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Volumetric */}

        <Box sx={style.volumetricBox}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              Volumetric
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCategory;
