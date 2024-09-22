const styles = () => ({
  //Delete Icon
  Appbar: {
    backgroundColor: "#fff",
    width: "100%",
    height: "auto",
    boxShadow: "none",
    borderBottom: "1px solid #1b1b1b17",
  },
  boxcolor: {
    color: "black",
  },
  mailBox: {
    "&.MuiBox-root": {
      display: "flex",
    },
  },
  MailIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "15px",
      color: "#4f4bad",
      marginLeft: "4px",
      marginTop: "4px",
    },
  },
  maintext: {
    "&.MuiBox-root": {
      color: "#534b4b",
      marginRight: "22px",
      marginTop: "7px",
      fontSize: "14px",
    },
  },
  mailBackgroundBox: {
    "&.MuiBox-root": {
      backgroundColor: "#e1f6ff75",
      height: "24px",
      width: "24px",
      borderRadius: "25px",
      marginRight: "8px",
      marginTop: "4px",
    },
  },
  mainContainerBox: {
    "&.MuiBox-root": { padding: "0px 18px 0px 15px" },
  },
  ordermanageBox: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "74px",
      padding: "0px 18px 0px 25px",
      backgroundColor: "#FCFCFC",
    },
  },
  ordermanageText: {
    "&.MuiBox-root": {
      color: "#534b4b7d",
      fontSize: "14px",
    },
  },
  Divider: {
    "&.MuiDivider-root": {
      marginTop: "8px",
      borderColor: "#1b1b1b17",
    },
  },
});

export default styles;
