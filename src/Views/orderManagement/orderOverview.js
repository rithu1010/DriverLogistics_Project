import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  FormControl,
  MenuItem,
  Button,
  Select,
} from "@mui/material";
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
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./style";
import { useTheme } from "@mui/material/styles";

const OrderOverview = ({ orderData, setOrderData }) => {
  const theme = useTheme();
  const style = styles(theme);

  const [rows, setRows] = useState(orderData || []);
  const [editIndex, setEditIndex] = useState(null);
  const [updatedRow, setUpdatedRow] = useState(null);
  useEffect(() => {}, [rows]);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setUpdatedRow({ ...rows[index] });
  };

  useEffect(() => {
    if (orderData) {
      setRows(orderData);
    }
  }, [orderData]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setUpdatedRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (index) => {
    const updatedRows = [...rows];
    updatedRows[index] = updatedRow;
    setRows(updatedRows);
    setOrderData(updatedRows);
    toast.success("Order updated successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
    setOrderData(updatedRows);
    toast.success("Order deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase();
  };
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
                  overflowY: "auto",
                  maxHeight: "calc(98vh - 300px)",
                  scrollBehavior: "smooth",
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
                    {rows && rows?.length > 0 ? (
                      <>
                        {rows?.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            {editIndex === index ? (
                              <>
                                <TableCell sx={{ padding: "5px" }}>
                                  {index + 1}
                                </TableCell>
                                <TableCell sx={{ padding: "5px" }}>
                                  <TextField
                                    variant="outlined"
                                    size="small"
                                    sx={style.inputField}
                                    defaultValue={row.invoice}
                                    onChange={(e) =>
                                      handleInputChange(e, "invoice", index)
                                    }
                                  />
                                </TableCell>
                                <TableCell sx={{ padding: "5px" }}>
                                  <FormControl
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={style.inputField2}
                                  >
                                    <Select
                                      labelId="load-type-label"
                                      defaultValue={row?.loadType}
                                      onChange={(e) =>
                                        handleInputChange(e, "loadType", index)
                                      }
                                    >
                                      <MenuItem value="carton Box">
                                        Carton Box
                                      </MenuItem>
                                      <MenuItem value="wooden Box">
                                        Wooden Box
                                      </MenuItem>
                                      <MenuItem value="plastic">
                                        Plastic
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell sx={{ padding: "5px" }}>
                                  <TextField
                                    variant="outlined"
                                    size="small"
                                    sx={style.inputField}
                                    defaultValue={row.length}
                                    onChange={(e) =>
                                      handleInputChange(e, "length", index)
                                    }
                                  />
                                </TableCell>

                                <TableCell sx={{ padding: "5px" }}>
                                  <TextField
                                    variant="outlined"
                                    size="small"
                                    sx={style.inputField}
                                    defaultValue={row.weight}
                                    onChange={(e) =>
                                      handleInputChange(e, "weight", index)
                                    }
                                  />
                                </TableCell>
                                <TableCell sx={{ padding: "5px" }}>
                                  <TextField
                                    variant="outlined"
                                    size="small"
                                    sx={style.inputField}
                                    defaultValue={row.volemetric}
                                    onChange={(e) =>
                                      handleInputChange(e, "volemetric", index)
                                    }
                                  />
                                </TableCell>
                                <TableCell>
                                  <FormControl
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={style.inputField2}
                                  >
                                    <Select
                                      labelId="product-category-label-2"
                                      defaultValue={{ category: row.category }}
                                      onChange={(e) =>
                                        handleInputChange(e, "category", index)
                                      }
                                    >
                                      <MenuItem value="chemicals">
                                        Chemicals
                                      </MenuItem>
                                      <MenuItem value="electronics">
                                        Electronics
                                      </MenuItem>
                                      <MenuItem value="furniture">
                                        Furniture
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell sx={{ padding: "5px" }}>
                                  <FormControl
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    sx={style.inputField2}
                                  >
                                    <Select
                                      labelId="hazmat-class-label-2"
                                      defaultValue={row.class1}
                                      onChange={(e) =>
                                        handleInputChange(e, "class", index)
                                      }
                                    >
                                      <MenuItem value="Yes">Yes </MenuItem>
                                      <MenuItem value="No">No </MenuItem>
                                    </Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell sx={{ padding: "5px" }}>
                                  <Button
                                    onClick={() =>
                                      handleSave(index, updatedRow)
                                    }
                                  >
                                    Save
                                  </Button>
                                </TableCell>
                              </>
                            ) : (
                              <>
                                <TableCell sx={style.tablecelltdrow}>
                                  {index + 1}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {row.invoice || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {capitalizeFirstLetter(row.loadType) || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {row.length || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {row.weight || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {row.volemetric || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {capitalizeFirstLetter(row.category) || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  {capitalizeFirstLetter(row.class) || "--"}
                                </TableCell>
                                <TableCell sx={style.tablecelltdrow}>
                                  <Box sx={{ display: "flex" }}>
                                    <IconButton
                                      sx={style.tableIcon}
                                      onClick={() => handleEditClick(index)}
                                    >
                                      <EditIcon sx={style.tableIconsvg} />
                                    </IconButton>
                                    <IconButton
                                      sx={style.tableIcon}
                                      onClick={() => handleDelete(index)}
                                    >
                                      <DeleteOutlineIcon
                                        sx={style.tableIconsvg}
                                      />
                                    </IconButton>
                                    <IconButton sx={style.tableIcon}>
                                      <AddIcon sx={style.tableIconsvg} />
                                    </IconButton>{" "}
                                    <IconButton sx={style.tableIcon}>
                                      <MoreVertIcon sx={style.tableIconsvg} />
                                    </IconButton>
                                  </Box>
                                </TableCell>
                              </>
                            )}
                          </TableRow>
                        ))}
                      </>
                    ) : (
                      <>
                        <TableRow>
                          <TableCell
                            sx={{
                              borderBottom: "none",
                            }}
                            colSpan={8}
                          >
                            <Grid container spacing={1}>
                              <Grid
                                item
                                xs={12}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                No Data Available
                              </Grid>
                            </Grid>
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
