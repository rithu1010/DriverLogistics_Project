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

const OrderOverview = ({ orderData }) => {
  const theme = useTheme();
  const style = styles(theme);

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
              <TableContainer
                sx={{
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f1f1f1",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
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
                    {orderData && orderData?.length > 0 ? (
                      <>
                        {orderData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={style.tablecelltdrow}>
                              {index + 1}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.invoice || "--"}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.loadType || "--"}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.length || "--"}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.weight || "--"}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.weight || "--"}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.category || "--"}
                            </TableCell>
                            <TableCell sx={style.tablecelltdrow}>
                              {row.height || "--"}
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    ) : (
                      <>
                        <TableRow>
                          <TableCell
                            sx={{
                              borderBottom: "none",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                            colSpan={9}
                          >
                            No Data Available
                          </TableCell>
                        </TableRow>
                      </>
                    )}
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
