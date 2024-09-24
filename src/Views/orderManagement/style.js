import { Dialpad } from "@mui/icons-material";

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
  OrderNewText1: {
    "&.MuiTypography-root": {
      color: "#fff",
      whiteSpace: "nowrap",
      fontSize: "14px",
      fontWeight: "500",
      opacity: "1",
      letterSpacing: "0px",
      cursor: "pointer",
    },
  },
  plusicon1: {
    fontSize: "20px",
    color: "#fff",
    marginLeft: "7px",
    marginTop: "-2px",
  },
  OrderNewText: {
    "&.MuiTypography-root": {
      color: "#545454",
      whiteSpace: "nowrap",
      fontSize: "14px",
      fontWeight: "500",
      opacity: "1",
      letterSpacing: "0px",
      cursor: "pointer",
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
      justifyContent: "center",
      marginTop: { xs: "12px", sm: "3px", md: "0", lg: "0", xl: "0" },
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
    "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "0",
      padding: "10px 15px 0px 15px",
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
      backgroundColor: "#f4f9fc",
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
      backgroundColor: "#f4f9fc",
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
        cursor: "pointer",
      },
    },
  },
  SpeakerIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "50px",
      color: "#4064f0",
      marginLeft: "4px",
      marginTop: "4px",
    },
  },
  productCategory: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  productCategory1: {
    "&.MuiBox-root": {
      display: "flex",
      whiteSpace: "nowrap",
    },
  },
  NewOrderBackroundBox: {
    "&.MuiBox-root": {
      backgroundColor: "#1566d9",
      padding: "5px 8px 5px 8px",
      color: "white",
      borderRadius: "4px",
      display: "flex",
      marginRight: "-4px",
    },
  },
  categoryText: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontSize: "13px",
      fontWeight: "550",
      opacity: "1",
      letterSpacing: "0px",
      marginTop: "10px",
    },
  },
  inputField: {
    marginTop: { xs: "10px", md: "0", sm: 0, lg: 0, xl: 0 },
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
      borderTopRightRadius: "0px !important",
      color: "#0d0303",
      backgroundColor: "#fff",
    },
    "&.MuiFormControl-root": {
      input: {
        color: "#0d0303",
        fontSize: "16px",
        textAlign: "left",
        padding: "7px 7px 7px 7px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "4px",
      border: "1px solid #0d03032e",
    },
    "& .MuiInputLabel-root": {
      color: "#0d0303",
      fontSize: "13px",
      fontWeight: "500",
      opacity: "0.8",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #0d03032e",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      border: "1px solid #0d03032e",
    },
  },
  volumetricBox: {
    "&.MuiBox-root": {
      backgroundColor: "#f4f9fc",
      border: "1px solid #1b1b1b0a",
      marginTop: "15px",
      padding: "15px",
    },
  },
  subtotalBox: {
    "&.MuiBox-root": {
      backgroundColor: "#E7F5FE",
      border: "1px solid #1b1b1b0a",
      marginTop: "15px",
      padding: "15px",
    },
  },
  title: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontSize: "16px",
      fontWeight: "550",
      opacity: "1",
      letterSpacing: "0px",
      marginTop: "-12px",
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
      fontWeight: "550",
      opacity: "0.7",
      letterSpacing: "0px",
      marginTop: "8px",
    },
  },
  formlabeltext: {
    fontSize: "12px",
    color: "#0d0303",
    marginBottom: "4px",
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
      marginLeft: "2px",
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
  totalweight: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontWeight: "550",
      fontSize: "14px",
    },
  },
  totalweight1: {
    "&.MuiTypography-root": {
      color: "#0d0303",
      fontWeight: "500",
      fontSize: "14px",
    },
  },
  termsandconditions: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "550",
      color: "#0d0303",
      opacity: "0.7",
      letterSpacing: "0px",
      marginTop: "12px",
      marginBottom: "-6px",
    },
  },
  termsandconditions1: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "500",
      color: "#0d0303",
      opacity: "0.7",
      letterSpacing: "0px",
      marginTop: "8px",
      marginBottom: "-6px",
    },
  },
  LoadCategoryBox: {
    "&.MuiBox-root": {
      backgroundColor: "#E0EBFD",
      color: "#0d0303",
      width: "fit-content",
      borderRadius: "8px",
      textAlign: "center",
      padding: "5px 10px 5px 10px",
      marginBottom: "10px",
      cursor: "pointer",
    },
  },
  payButon: {
    "&.MuiButtonBase-root": {
      backgroundColor: "#0D824D",
      opacity: "1",
      height: "38px",
      fontSize: "12px",
      color: "#fff",
      textAlign: "center",
      marginTop: "27px",
      width: "200px",
      textTransform: "normal",
      cursor: "pointer",
    },
  },
  doneiconBox: {
    "&.MuiBox-root": {
      padding: "10px",
      height: "85px",
      width: "85px",
      borderRadius: "60px",
      backgroundColor: "#a6ffd347",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "0px",
      marginTop: "30px",
    },
  },
  DoneIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "59px",
      color: "#0d880d87",
      marginLeft: "0px",
      marginTop: "6px",
      opacity: "1",
    },
  },
  OrderAdd: {
    "&.MuiBox-root": {
      fontSize: "16px",
      fontWeight: "500",
      color: "#0d0303",
      opacity: "0.7",
      letterSpacing: "0px",
      marginTop: "18px",
      marginBottom: "19px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  okayButton: {
    "&.MuiBox-root": {
      backgroundColor: "#6a92ba42",
      color: "#0d0303",
      width: "50px",
      borderRadius: "8px",
      textAlign: "center",
      padding: "8px 5px 8px 5px",
      marginBottom: "30px",
      cursor: "pointer",
    },
  },
  displayFlex: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  // Booking Confirmed //
  cmnDrawerPadding: {
    "&.MuiBox-root": {
      padding: "5px 0px 10px 0px",
    },
  },
  cmnDrawerCloseIcon: {
    "&.MuiSvgIcon-root": {
      float: "right",
      color: "#0d0303",
      cursor: "pointer",
      marginTop: "-6px",
      fontSize: "20px",
      opacity: "0.8",
      // fontSize: '50px',
    },
  },
  cmnDrawerHeadBox: {
    "&.MuiBox-root": {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
  },
  cmnDrawerHeadingText: {
    "&.MuiTypography-root": {
      fontWeight: "500",
      opacity: "0.8",
      fontSize: "13px",
      color: "#0d0303",
      marginTop: "-2px",
      wordWrap: "break-word",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  cmnDrawerBackArrow: {
    "&.MuiSvgIcon-root": {
      fontSize: "13px",
      color: "#0d0303",
      marginTop: "13px",
      cursor: "pointer",
    },
  },
  tableIcon: {
    "&.MuiIconButton-root": {
      width: 25,
      height: 25,
      mr: 1,
      border: "1px solid #ccc",
      backgroundColor: "#f4f9fc",
      padding: "5px",
      cursor: "pointer",
      borderRadius: "4px",
    },
  },
  tableIconsvg: {
    "&.MuiSvgIcon-root": {
      fontSize: 20,
      color: "#363739",
      cursor: "pointer",
      opacity: "0.8",
    },
  },
  ordermanageTableiconflexBox: {
    "&.MuiBox-root": {
      display: { xs: "grid", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
      justifyContent: {
        xs: "center",
        sm: "space-between",
        md: "space-between",
        lg: "space-between",
        xl: "space-between",
      },
      padding: "8px 10px 15px 15px",
      alignItems: "center",
    },
  },
  overviewBox2: {
    "&.MuiBox-root": {
      display: { xs: "grid", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
      justifyContent: {
        xs: "center",
        sm: "space-between",
        md: "space-between",
        lg: "space-between",
        xl: "space-between",
      },
      marginBottom: {
        xs: "12px",
        sm: "12px",
        md: "0",
        lg: "0",
        xl: "0",
      },
    },
  },
  tablecelltd: {
    "&.MuiTableCell-root": {
      letterSpacing: "0em",
      fontWeight: "550",
      opacity: "0.7",
      lineHeight: "1rem",
      whiteSpace: "nowrap",
    },
  },
  tablecelltdrow: {
    "&.MuiTableCell-root": {
      letterSpacing: "0em",
      fontWeight: "500",
      opacity: "0.7",
      lineHeight: "1rem",
      whiteSpace: "nowrap",
    },
  },
  BookingConfirmBox: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  bookingconfirmedText: {
    "&.MuiTypography-root": {
      fontWeight: "600",
      opacity: "0.8",
      fontSize: "18px",
      color: "#0d0303",
      marginTop: "10px",
      wordWrap: "break-word",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  bookingconfirmedsubText: {
    "&.MuiTypography-root": {
      fontWeight: "500",
      opacity: "0.4",
      fontSize: "14px",
      color: "#0d0303",
      marginTop: "5px",
      wordWrap: "break-word",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  tablecellmain2: {
    "&.MuiTypography-root": {
      fontSize: "14px",
      fontWeight: "550",
      color: "#3F6FAF",
      opacity: "1",
      letterSpacing: "0px",
      marginTop: "0px",
      marginBottom: "-6px",
    },
  },
  AddCircleOutlineIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: 18,
      color: "#3F6FAF",
      cursor: "pointer",
      opacity: "1",
      marginRight: "5px",
    },
  },
  confirmButton: {
    "&.MuiButtonBase-root": {
      backgroundColor: "#1566db",
      opacity: "1",
      height: "38px",
      fontSize: "13px",
      color: "#fff",
      textAlign: "center",
      marginTop: "20px",
      width: "100%",
      cursor: "pointer",
      textTransform: "capitalize",
    },
  },
  confirmButtonborder: {
    "&.MuiButtonBase-root": {
      border: "1px solid #1566db",
      opacity: "1",
      height: "38px",
      fontSize: "13px",
      color: "#1566db",
      textAlign: "center",
      marginTop: "20px",
      width: "100%",
      cursor: "pointer",
      textTransform: "capitalize",
    },
  },
  KeyboardBackspaceIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: 19,
      color: "#0d0303",
      cursor: "pointer",
      opacity: "1",
      marginRight: "8px",
    },
  },
});

export default styles;
