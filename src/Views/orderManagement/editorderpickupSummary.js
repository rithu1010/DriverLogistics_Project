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

const PickupAddress = ({ open, handleClose, PickupAddress }) => {
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
    name: PickupAddress[0]?.PickupContactDetails?.contactName,
    emailAddress: PickupAddress[0]?.PickupContactDetails?.email,
    contactNumber: PickupAddress[0]?.PickupContactDetails?.phoneNumber,
    panNumber: "4556767",
    pickupcontactname: PickupAddress[0]?.PickupContactDetails?.contactName,
    pickupEmailAddress: PickupAddress[0]?.PickupContactDetails?.email,
    deliveryContactNo: "8976655443",
    pickupcntctNumber: PickupAddress[0]?.PickupContactDetails?.phoneNumber,
    fanNumber: "f233fr5",
    GST: "GST5677",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Pickup Address is required"),
    contactNumber: Yup.number().required("Contact Name is required"),
    emailAddress: Yup.string().required("Contact Name is required"),
    panNumber: Yup.string().required("Pickup Address is required"),
    pickupcontactname: Yup.string().required("Pickup Address is required"),
    fanNumber: Yup.string().required("Pickup Address is required"),
    GST: Yup.string().required("Pickup Address is required"),
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
          <Typography sx={styless.title}>Pickup Details</Typography>
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
                    <Typography sx={styless.title}>
                      Billing Person Details
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>Name</FormLabel>
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
                      Contact Number
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
                    <FormLabel sx={styless.formlabeltext}>Pan Number</FormLabel>
                    <Field name="panNumber">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={touched.panNumber && Boolean(errors.panNumber)}
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
                    <Typography sx={styless.title}>Contact Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Pickup-Contact-Name
                    </FormLabel>
                    <Field name="pickupcontactname">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={
                            touched.pickupcontactname &&
                            Boolean(errors.pickupcontactname)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Email Address
                    </FormLabel>
                    <Field name="pickupEmailAddress">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={
                            touched.pickupEmailAddress &&
                            Boolean(errors.pickupEmailAddress)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>

                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Delivery-Contact-Number
                    </FormLabel>
                    <Field name="deliveryContactNo">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={
                            touched.deliveryContactNo &&
                            Boolean(errors.deliveryContactNo)
                          }
                        />
                      )}
                    </Field>
                    <span style={styless.formlabeltext}>
                      we call the number cordinate the delivery.
                    </span>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>
                      Pickup-Secondary Contact Number(Optional)
                    </FormLabel>
                    <Field name="pickupcntctNumber">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={
                            touched.pickupcntctNumber &&
                            Boolean(errors.pickupcntctNumber)
                          }
                        />
                      )}
                    </Field>{" "}
                  </Grid>

                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>Fan-Number</FormLabel>
                    <Field name="fanNumber">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          sx={style.formField}
                          error={touched.fanNumber && Boolean(errors.fanNumber)}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel sx={styless.formlabeltext}>GST </FormLabel>
                    <Field name="GST">
                      {({ field }) => (
                        <TextField
                          {...field}
                          size="small"
                          fullWidth
                          sx={style.formField}
                          error={touched.GST && Boolean(errors.GST)}
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

export default PickupAddress;
