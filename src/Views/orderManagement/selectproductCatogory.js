import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
import OrderOverview from "./orderOverview";
import AddOrdermodal from "./AddOrderModal";

import Electronics from "../../assets/images/household-appliance.png";
import Consumables from "../../assets/images/goods.png";
import Sports from "../../assets/images/cricket.png";
import Truck from "../../assets/images/cargo-truck.png";
import Clothes from "../../assets/images/shirt.png";
import CartonBox from "../../assets/images/box.png";
import WoodenBox from "../../assets/images/wooden-box.png";
import Plastic from "../../assets/images/machine.png";
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

    setorderOpen(true);
    const order = {
      category: selectedCategory,
      loadType: selectedLoadType,
      ...volumetricData,
    };
    setOrderData((prevOrders) => [...prevOrders, order]);

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
    { name: "Consumables", src: Consumables },
    { name: "Electronics", src: Electronics },
    { name: "Sports Equipments", src: Sports },
    { name: "Cloth Items", src: Clothes },
    { name: "Others", src: Truck },
  ];

  const SelectLoadType = [
    { name: "Carton Box", src: CartonBox },
    { name: "Wooden Box", src: WoodenBox },
    { name: "Plastic", src: Plastic },
    { name: "Others", src: Truck },
  ];

  const restrictToNumbers = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  };

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
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                <Box sx={{ marginTop: "2px" }}> Select Product Category</Box>
              </Grid>
              {expanded !== "panel1" && (
                <>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <Box sx={style.LoadType}>
                      <Typography sx={style.LoadTypeTypo}>
                        {selectedCategory || ""}
                      </Typography>

                      <Typography
                        onClick={() => setExpanded("panel2")}
                        sx={style.LoadTypeTypo2}
                      >
                        Change
                      </Typography>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </AccordionSummary>
          <Divider sx={{ ...style.Divider, marginBottom: "12" }} />

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
                      <img
                        alt={option.name}
                        src={option.src}
                        style={{
                          height: "52px",
                          width: "52px",
                          marginBottom: "5px",
                          marginTop: "5px",
                        }}
                      />{" "}
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
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                  <Box sx={{ marginTop: "2px" }}> Select Load Type</Box>
                </Grid>
                {expanded !== "panel2" && (
                  <>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                      <Box sx={style.LoadType}>
                        <Typography sx={style.LoadTypeTypo}>
                          {selectedLoadType || ""}
                        </Typography>

                        <Typography
                          onClick={() => setExpanded("panel2")}
                          sx={style.LoadTypeTypo2}
                        >
                          Change
                        </Typography>
                      </Box>
                    </Grid>
                  </>
                )}
              </Grid>
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
                        <img
                          alt={option.name}
                          src={option.src}
                          style={{
                            height: "52px",
                            width: "52px",
                            marginBottom: "5px",
                            marginTop: "5px",
                          }}
                        />{" "}
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

              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={12}
                  lg={8}
                  xl={8}
                  sx={style.gridProceed1}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "35px",
                    }}
                  >
                    <Box sx={style.EnterLoadBox}>Enter Load Quantity</Box>
                    <TextField
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                      onKeyDown={(e) => restrictToNumbers(e)}
                      variant="outlined"
                      size="small"
                      sx={style.inputField}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  md={4}
                  lg={4}
                  xl={4}
                  sx={style.gridProceed}
                >
                  <Button
                    onClick={() => setExpanded(null)}
                    variant="outlined"
                    sx={style.proceedButton}
                  >
                    Proceed
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Volumetric */}

        <Box sx={style.volumetricBox}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4.5} sm={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={2.5} md={3} lg={3} xl={2.8}>
                  <Typography sx={style.formLabel}>Volumetric</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Length"
                    onKeyDown={(e) => restrictToNumbers(e)}
                    sx={style.inputField}
                    fullWidth
                    name="length"
                    value={volumetricData?.length}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Breadth"
                    sx={style.inputField}
                    fullWidth
                    onKeyDown={(e) => restrictToNumbers(e)}
                    name="breadth"
                    value={volumetricData?.breadth}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Height"
                    onKeyDown={(e) => restrictToNumbers(e)}
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
                <Grid item xs={12} md={3} sm={2.5} lg={4.2} xl={4}>
                  <Typography sx={style.formLabel}>Actual Weight</Typography>
                </Grid>
                <Grid item xs={12} md={4.5} sm={4} lg={5} xl={5.2}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Weight"
                    onKeyDown={(e) => restrictToNumbers(e)}
                    sx={style.inputField}
                    fullWidth
                    name="weight"
                    value={volumetricData?.weight}
                    onChange={handleVolumetricChange}
                  />
                </Grid>
                <Grid item xs={12} md={4.5} sm={4} lg={2.8} xl={2.8}>
                  <TextField
                    value="Kg"
                    disabled
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
                    variant="outlined"
                    size="small"
                    placeholder="000000"
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
          <OrderOverview orderData={orderData} setOrderData={setOrderData} />
        </Box>
        <ToastContainer />
      </Box>
      <AddOrdermodal open={orderOpen} handleClose={handleorderClose} />
    </Box>
  );
};

export default ProductCategory;
