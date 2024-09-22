import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

import styles from "./style";
import { useTheme } from "@mui/material/styles";

const OrderOverview = () => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <Box sx={{ marginTop: "15px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={style.OrderManagement}>
            <Box sx={style.displayflex}>
              <Box>
                <Typography sx={style.OrderManagementText}>
                  Order Overview
                </Typography>
              </Box>
              <Box sx={style.display}>
                <Typography sx={style.OrderNewText}>New Order</Typography>
                <span style={style.plusicon}>+</span>
              </Box>
            </Box>
            <Divider sx={style.Divider} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderOverview;
