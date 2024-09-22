const styles = () => ({
  //Delete Icon
  orderBox: {
    "&.MuiBox-root": {
      padding: "18px 18px 18px 25px",
    },
  },
  productcategrory: {
    "&.MuiBox-root": {
      padding: "10px 10px 10px 10px",
    },
  },
  ordersummaryBox: {
    "&.MuiBox-root": {
      padding: "0px 2px 10px 10px",
    },
  },
  OrderManagement: {
    "&.MuiBox-root": {
      border: "0.3px solid #70707012",
      padding: "15px 3px 15px 3px",
      marginBottom: "29px",
      borderRadius: "4px",
      paddingBottom: "20px",
      backgroundColor: "#FCFCFC",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "transparent",
      },
    },
  },
  OrderManagementText: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontSize: "18px",
      fontWeight: "600",
      opacity: "1",
      letterSpacing: "0px",
    },
  },
  displayflex: {
    "&.MuiBox-root": {
      display: { xs: "grid", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
      justifyContent: {
        xs: "center",
        sm: "space-between",
        md: "space-between",
        lg: "space-between",
        xl: "space-between",
      },
      padding: "0px 24px 0px 12px",
    },
  },
  OrderNewText: {
    "&.MuiTypography-root": {
      color: "#545454",
      whiteSpace: "nowrap",
      fontSize: "14px",
      fontWeight: "500",
      opacity: "1",
      letterSpacing: "0px",
    },
  },
  plusicon: {
    fontSize: "20px",
    color: "#545454",
    marginLeft: "7px",
    marginTop: "-2px",
  },
  display: {
    "&.MuiBox-root": {
      display: "flex",
    },
  },
  Divider: {
    "&.MuiDivider-root": {
      marginTop: "8px",
      borderColor: "#1b1b1b17",
      marginRight: "-3px",
      marginLeft: "-3px",
    },
  },
  accordian: {
    "&.MuiPaper-root.MuiAccordion-root": {
      marginBlockStart: "auto",
      border: "1px solid #1b1b1b0a",
      width: "100%",
      //   "&:hover": {
      //     boxShadow: `2px 3px 4px 2px #1b1b1b17`,
      //   },
      "&::before": {
        position: "absolute",
        opacity: 0.4,
      },
    },
    "& .MuiButtonBase-root.MuiAccordionSummary-root": {
      padding: "15px",
    },
  },
  activeJobsListBox1: {
    "&.MuiBox-root": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  accordiansummary: {
    "&.MuiPaper-root.MuiAccordion-root": {
      marginBlockStart: "auto",
      border: "1px solid #1b1b1b0a",
      width: "100%",
      boxShadow: "none",
      backgroundColor: "#33fff30f",
      "&::before": {
        position: "absolute",
        opacity: 0.4,
      },
    },
    "& .MuiButtonBase-root.MuiAccordionSummary-root": {
      padding: "10px",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: 0,
      marginTop: "-4px",
    },
  },
  paymentsummary: {
    "&.MuiPaper-root.MuiAccordion-root": {
      marginBlockStart: "auto",
      border: "1px solid #1b1b1b0a",
      width: "100%",
      boxShadow: "none",
      backgroundColor: "#33fff30f",
      "&::before": {
        position: "absolute",
        opacity: 0.4,
      },
    },
    "& .MuiButtonBase-root.MuiAccordionSummary-root": {
      padding: "10px 10px 10px 15px",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: 0,
      marginTop: "-4px",
    },
  },

  AccordionSummary: {
    "& .MuiAccordionSummary-content": {
      color: "#0d0303",
      fontWeight: "550",
      fontSize: "15px",
    },
  },
  selectcategoryBox: {
    "&.MuiBox-root": {
      border: "0.3px solid #70707012",
      padding: "14px",
      backgroundColor: "#fcfcfc",
      marginTop: "6px",
      "&:hover": {
        backgroundColor: "#33fff30f",
      },
    },
  },
  SpeakerIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "36px",
      color: "#3f13ea",
      marginLeft: "4px",
      marginTop: "4px",
    },
  },
  categoryText: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontSize: "12px",
      fontWeight: "500",
      opacity: "1",
      letterSpacing: "0px",
      marginTop: "8px",
    },
  },
  volumetricBox: {
    "&.MuiBox-root": {
      backgroundColor: "#33fff30f",
      border: "1px solid #1b1b1b0a",
      marginTop: "15px",
      padding: "15px",
    },
  },
  formText: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontSize: "12px",
      fontWeight: "500",
      opacity: "0.5",
      letterSpacing: "0px",
      marginTop: "8px",
    },
  },
  formLabel: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontSize: "13px",
      fontWeight: "530",
      opacity: "1",
      letterSpacing: "0px",
      marginTop: "8px",
    },
  },
  adcOrderBox: {
    "&.MuiBox-root": {
      display: "flex",
      backgroundColor: "#fff",
      border: "1px solid #1b1b1b0a",
      padding: "6px",
    },
  },
  activeRfqtypoassignee: {
    "&.MuiTypography-root": {
      fontSize: "11px",
      fontWeight: "500",
      color: "#0d0303",
      marginTop: "1px",
      opacity: "1",
      letterSpacing: "0px",
    },
  },
  mainTitlesummary: {
    "&.MuiTypography-root": {
      fontSize: "13px",
      fontWeight: "550",
      color: "#00000",
      marginTop: "1px",
      opacity: "1",
      letterSpacing: "0px",
    },
  },
  subTitlesummary: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "400",
      marginTop: "9px",
      marginBottom: "20px",
      color: "#00000",
      opacity: "1",
      letterSpacing: "0px",
    },
  },
  ErrorOutlineIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "19px",
      color: "#0d0303",
      marginLeft: "0px",
      marginTop: "6px",
      opacity: "0.1",
    },
  },
  warningtext: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "400",
      marginTop: "6px",
      color: "#0d0303",
      opacity: "0.7",
      letterSpacing: "0px",
    },
  },
  tablecellmain: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "550",
      color: "#0d0303",
      opacity: "0.7",
      letterSpacing: "0px",
      marginTop: "-6px",
      marginBottom: "-6px",
    },
  },
  tablecellmain1: {
    "&.MuiTypography-root": {
      fontSize: "13px",
      fontWeight: "500",
      color: "#0d0303",
      opacity: "0.7",
      letterSpacing: "0px",
      marginTop: "-6px",
      marginBottom: "-6px",
    },
  },
});

export default styles;
