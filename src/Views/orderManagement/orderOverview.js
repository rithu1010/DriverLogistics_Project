import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveIcon from "@mui/icons-material/Save";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./style";
import { useTheme } from "@mui/material/styles";

const OrderOverview = () => {
  const theme = useTheme();
  const style = styles(theme);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Box sx={{ marginTop: "15px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={style.OrderManagement}>
            <Box sx={style.ordermanageTableiconflexBox}>
              <Box sx={style.overviewBox2}>
                <Typography sx={style.OrderManagementText}>
                  Order Overview
                </Typography>
              </Box>
              <Box>
                <IconButton sx={style.tableIcon}>
                  <SearchIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <AddIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <ContentCopyIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <SaveIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <AttachFileIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <DeleteOutlineIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <AutorenewIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <SettingsIcon sx={style.tableIconsvg} />
                </IconButton>
                <IconButton sx={style.tableIcon}>
                  <MoreVertIcon sx={style.tableIconsvg} />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <TableContainer>
                <Table
                  sx={{ minWidth: 650, marginTop: "5px" }}
                  aria-label="simple table"
                >
                  <TableHead sx={{ backgroundColor: "#f4f9fc" }}>
                    <TableRow>
                      <TableCell sx={style.tablecelltd}>No</TableCell>
                      <TableCell sx={style.tablecelltd}>Invoice no</TableCell>
                      <TableCell sx={style.tablecelltd}>Load Type</TableCell>
                      <TableCell sx={style.tablecelltd}>
                        Load Quantity
                      </TableCell>
                      <TableCell sx={style.tablecelltd}>
                        Actual Weight
                      </TableCell>
                      <TableCell sx={style.tablecelltd}>
                        Volumetric (cm3)
                      </TableCell>
                      <TableCell sx={style.tablecelltd}>
                        Product Category
                      </TableCell>
                      <TableCell sx={style.tablecelltd}>HAZMAT class</TableCell>
                      <TableCell sx={style.tablecelltd}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderOverview;
