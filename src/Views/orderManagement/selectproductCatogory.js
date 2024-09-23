import React, { useState } from "react";
import { Box, Divider, Grid, Typography, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
import SpeakerIcon from "@mui/icons-material/Speaker";
import OrderOverview from "./orderOverview";
import AddOrdermodal from "./AddOrderModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCategory = ({ setOrderData, orderData }) => {
  const theme = useTheme();
  const style = styles(theme);

  const [expanded, setExpanded] = useState("panel1");
  const [orderOpen, setorderOpen] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLoadType, setSelectedLoadType] = useState("");
  const [volumetricData, setVolumetricData] = useState({
    length: "",
    breadth: "",
    height: "",
    weight: "",
    invoice: "",
  });

  const handleOrderOpen = () => {
    // Check if all required fields are filled
    if (
      !selectedCategory ||
      !selectedLoadType ||
      !volumetricData.length ||
      !volumetricData.breadth ||
      !volumetricData.height ||
      !volumetricData.weight ||
      !volumetricData.invoice
    ) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // If validation passes, proceed with adding the order
    setorderOpen(true);
    const order = {
      category: selectedCategory,
      loadType: selectedLoadType,
      ...volumetricData,
    };
    setOrderData((prevOrders) => [...prevOrders, order]);

    // Reset form fields
    setSelectedCategory("");
    setSelectedLoadType("");
    setVolumetricData({
      length: "",
      breadth: "",
      height: "",
      weight: "",
      invoice: "",
    });
    setExpanded("panel1");

    toast.success("Order added successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleorderClose = () => {
    setorderOpen(false);
  };

  const SelectProductCategory = [
    { name: "Consumables" },
    { name: "Electronics" },
    { name: "Sports Equipments" },
    { name: "Cloth Items" },
    { name: "Others" },
  ];

  const SelectLoadType = [
    { name: "Carton Box" },
    { name: "Wooden Box" },
    { name: "Plastic" },
    { name: "Others" },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLoadTypeSelect = (loadType) => {
    setSelectedLoadType(loadType);
  };

  const handleVolumetricChange = (e) => {
    const { name, value } = e.target;
    setVolumetricData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Box sx={style.productcategrory}>
        {/* Accordian 1 */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: expanded === "panel1" ? "#ffffff" : "#f4f9fc",
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
            <Box sx={style.productCategory}>
              <Box sx={style.productCategory1}>Select Product Category</Box>
              <Box></Box>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={1}>
              {SelectProductCategory?.map((option, index) => (
                <Grid
                  item
                  xs={12}
                  lg={2.4}
                  xl={2.4}
                  md={2.4}
                  sm={6}
                  key={index}
                >
                  <Box
                    onClick={() => handleCategorySelect(option?.name)}
                    sx={style.selectcategoryBox}
                    style={{
                      backgroundColor:
                        selectedCategory === option?.name
                          ? "#F4F9FC"
                          : "#FEFEFE",
                    }}
                  >
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <SpeakerIcon sx={style.SpeakerIcon} />
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={style.categoryText}>
                        {option.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* Accordian 2 */}

        <Box sx={{ marginTop: "15px" }}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              backgroundColor: expanded === "panel2" ? "#ffffff" : "#f4f9fc",
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
                {SelectLoadType?.map((option, index) => (
                  <Grid
                    item
                    xs={12}
                    lg={2.4}
                    xl={2.4}
                    md={2.4}
                    sm={6}
                    key={index}
                  >
                    <Box
                      sx={style.selectcategoryBox}
                      onClick={() => handleLoadTypeSelect(option?.name)}
                      style={{
                        backgroundColor:
                          selectedLoadType === option?.name
                            ? "#F4F9FC"
                            : "#FEFEFE",
                      }}
                    >
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SpeakerIcon sx={style.SpeakerIcon} />
                      </Box>
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography sx={style.categoryText}>
                          {option?.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Volumetric */}

        <Box sx={style.volumetricBox}>
          <Grid container spacing={1}>
            {/* Volumetric */}
            <Grid item xs={12} md={4.5} sm={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={2.5} md={3} lg={3} xl={3}>
                  <Typography sx={style.formLabel}>Volumetric</Typography>
                </Grid>
                {/* <Grid item xs={6} sm={0.5} md={0.5} lg={0.5} xl={0.5}></Grid> */}
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    label="Length"
                    variant="outlined"
                    size="small"
                    sx={style.inputField}
                    fullWidth
                    name="length"
                    value={volumetricData?.length}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    label="Breadth"
                    variant="outlined"
                    size="small"
                    sx={style.inputField}
                    fullWidth
                    name="breadth"
                    value={volumetricData?.breadth}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    label="Height"
                    variant="outlined"
                    size="small"
                    sx={style.inputField}
                    fullWidth
                    name="height"
                    value={volumetricData?.height}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
              </Grid>
              <Typography sx={style.formText}>
                Length + Breadth + Height should be at least 15 cm
              </Typography>
            </Grid>

            {/* Actual Weight */}
            <Grid item xs={12} md={4} sm={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={3} sm={2.5} lg={4.2} xl={4.2}>
                  <Typography sx={style.formLabel}>Actual Weight</Typography>
                </Grid>
                <Grid item xs={12} md={4.5} sm={4} lg={4.8} xl={4.8}>
                  <TextField
                    label="Weight"
                    variant="outlined"
                    size="small"
                    sx={style.inputField}
                    fullWidth
                    name="weight"
                    value={volumetricData?.weight}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
                <Grid item xs={12} md={4.5} sm={4} lg={3} xl={3}>
                  <TextField
                    label="Kg"
                    variant="outlined"
                    size="small"
                    sx={style.inputField}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Typography sx={style.formText}>
                Package weight should be at least 50 grams.
              </Typography>
            </Grid>

            {/* Invoice No */}
            <Grid item xs={12} md={2} sm={12}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={8} sm={2.5} lg={6.5} xl={6.5}>
                  <Typography sx={style.formLabel}>Invoice No</Typography>
                </Grid>
                <Grid item xs={12} md={4} sm={5.5} lg={5.5} xl={5.5}>
                  <TextField
                    label="000000"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={style.inputField}
                    name="invoice"
                    value={volumetricData?.invoice}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={style.adcOrderBox} onClick={handleOrderOpen}>
                  <Typography sx={style.OrderNewText}>Add Order</Typography>
                  <span style={style.plusicon}>+</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* orderOverview */}
        <Box>
          <OrderOverview orderData={orderData} />
        </Box>
        <ToastContainer />
      </Box>
      <AddOrdermodal open={orderOpen} handleClose={handleorderClose} />
    </Box>
  );
};

export default ProductCategory;
