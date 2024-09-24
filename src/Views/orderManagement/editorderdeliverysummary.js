import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Divider,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./style";
import { useTheme } from "@mui/material/styles";

const DeliveryAddress = ({ open, handleClose, DeliveryAddress }) => {
  const theme = useTheme();
  const styless = styles(theme);

  const style = {
    modalBox: {
      position: "absolute",
      top: "50%",
      left: "74%",
      right: 0,
      transform: "translate(-50%, -50%)",
      width: "80%",
      maxWidth: "600px",
      maxHeight: "90vh",
      overflowY: "auto",
      bgcolor: "background.paper",
      boxShadow: 22,
      p: 4,
      borderRadius: "12px",
    },
    backdrop: {
      zIndex: (theme) => theme.zIndex.modal + 0.3,
      backgroundColor: "#33fff30f",
    },
  };

  const initialValues = {
    name: DeliveryAddress[0]?.DeliveryContactDetails?.contactName,
    emailAddress: DeliveryAddress[0]?.DeliveryContactDetails?.email,
    contactNumber: DeliveryAddress[0]?.DeliveryContactDetails?.phoneNumber,
    secondarycontactNumber: "+44555555556",
    Addressline01: DeliveryAddress[0]?.DeliveryAddress,
    Addressline02: DeliveryAddress[0]?.DeliveryAddress,
    buildingNo: "B56677",
    streetName: "Kozhikode",
    pinCode: "6789990",
    City: "Kozhikode",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Pickup Address is required"),
    contactNumber: Yup.number().required("Contact Name is required"),
    emailAddress: Yup.string().required("Contact Name is required"),
    secondarycontactNumber: Yup.string().required("Pickup Address is required"),
    Addressline01: Yup.string().required("Pickup Address is required"),
    Addressline02: Yup.string().required("Pickup Address is required"),
    pinCode: Yup.string().required("Pickup Address is required"),
    City: Yup.string().required("Pickup Address is required"),
  });

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          sx: { backgroundColor: "#1566db36" },
          onClick: (event) => event.stopPropagation(),
        }}
      >
        <Box sx={style.modalBox}>
          <Typography sx={styless.title}>Delivery Details</Typography>
          <Divider
            sx={{
              ...styless.Divider,
              marginBottom: "13px",
            }}
          />

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              handleClose();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    Date
                  </Grid>
                  <Grid item xs={6}>
                    Date Time
                  </Grid>
                </Grid>
                <Divider
                  sx={{
                    ...styless.Divider,
                    marginBottom: "16px",
                  }}
                />

                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography sx={styless.title}>Contact Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      {" "}
                      Delivery Contact Name
                    </FormLabel>
                    <Field name="name">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={touched.name && Boolean(errors.name)}
                        />
                      )}
                    </Field>{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Email Address
                    </FormLabel>
                    <Field name="emailAddress">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={
                            touched.emailAddress && Boolean(errors.emailAddress)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Delivery Contact Number
                    </FormLabel>
                    <Field name="contactNumber">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={
                            touched.contactNumber &&
                            Boolean(errors.contactNumber)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>

                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Delivery Secondary Contact Number(Optional)
                    </FormLabel>
                    <Field name="secondarycontactNumber">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={
                            touched.secondarycontactNumber &&
                            Boolean(errors.secondarycontactNumber)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>
                </Grid>
                <Divider
                  sx={{
                    ...styless.Divider,
                    marginBottom: "19px",
                  }}
                />
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography sx={styless.title}>
                      Add Delivery Address
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Addressline01
                    </FormLabel>
                    <Field name="Addressline01">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          required
                          sx={style.formField}
                          error={
                            touched.Addressline01 &&
                            Boolean(errors.Addressline01)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Addressline02
                    </FormLabel>
                    <Field name="Addressline02">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          required
                          sx={style.formField}
                          error={
                            touched.Addressline02 &&
                            Boolean(errors.Addressline02)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>

                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Building No
                    </FormLabel>
                    <Field name="buildingNo">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={
                            touched.buildingNo && Boolean(errors.buildingNo)
                          }
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Street Name
                    </FormLabel>
                    <Field name="streetName">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={
                            touched.streetName && Boolean(errors.streetName)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>

                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>Pin Code</FormLabel>
                    <Field name="pinCode">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={touched.pinCode && Boolean(errors.pinCode)}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>City </FormLabel>
                    <Field name="City">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={touched.City && Boolean(errors.City)}
                        />
                      )}
                    </Field>{" "}
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={0}
                  style={{ backgroundColor: "#33fff30f", marginTop: "12px" }}
                >
                  <Grid item xs={8}>
                    <Grid container spacing={0}>
                      {" "}
                      <Grid item sx={1}>
                        <Box>
                          <Checkbox
                            defaultChecked
                            style={{ color: "#000080" }}
                          />
                        </Box>{" "}
                      </Grid>
                      <Grid item sx={11}>
                        <Box>
                          <Typography sx={styless.termsandconditions}>
                            Privacy Policy
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item sx={12}>
                        <Box sx={{ padding: "2px 5px 0px 5px" }}>
                          <Typography sx={styless.termsandconditions1}>
                            You acknowledge that you have read and understood
                            our Privacy Policy cuclining how we collect use, and
                            protect your personal information.
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      sx={styless.payButon}
                      fullWidth
                      onClick={handleClose}
                    >
                      Add Details
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeliveryAddress;
