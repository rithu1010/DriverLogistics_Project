import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
// import Grid from "@mui/material/Grid";

import styles from "./style";
import { useTheme } from "@mui/material/styles";
import ProductCategory from "./selectproductCatogory";

const OrderManagement = () => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <Box>
      <Box sx={style.orderBox}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <Box sx={style.OrderManagement}></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderManagement;
