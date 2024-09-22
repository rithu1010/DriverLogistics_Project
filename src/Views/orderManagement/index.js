import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
// import Grid from "@mui/material/Grid";

import styles from "./style";
import { useTheme } from "@mui/material/styles";
import ProductCategory from "./selectproductCatogory";
import OrderSummary from "./orderSummary";

const OrderManagement = () => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <Box>
      <Box sx={style.orderBox}>
        <Grid container spacing={1}>
          <Grid item xs={8.5}>
            <Box sx={style.OrderManagement}>
              <Box sx={style.displayflex}>
                <Box>
                  <Typography sx={style.OrderManagementText}>
                    Order Management
                  </Typography>
                </Box>
                <Box sx={style.display}>
                  <Typography sx={style.OrderNewText}>New Order</Typography>
                  <span style={style.plusicon}>+</span>
                </Box>
              </Box>
              <Divider sx={style.Divider} />
              <Box>
                <ProductCategory />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3.5}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderManagement;
