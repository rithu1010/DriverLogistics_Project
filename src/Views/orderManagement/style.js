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
  OrderManagement: {
    "&.MuiBox-root": {
      border: "0.3px solid #70707012",
      padding: "15px 3px 15px 3px",
      marginBottom: "29px",
      borderRadius: "4px",
      height: "100vh",
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
      display: "flex",
      justifyContent: "space-between",
      padding: "0px 24px 0px 12px",
    },
  },
  OrderNewText: {
    "&.MuiTypography-root": {
      color: "#545454",
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
  AccordionSummary: {
    "& .MuiAccordionSummary-content": {
      color: "#0d0303",
      fontWeight: "550",
    },
  },
  selectcategoryBox: {
    "&.MuiBox-root": {
      border: "0.3px solid #70707012",
      padding: "14px",
      backgroundColor: "#fcfcfc",
      marginTop: "6px",
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
      marginTop: "12px",
      padding: "15px",
    },
  },
});

export default styles;
