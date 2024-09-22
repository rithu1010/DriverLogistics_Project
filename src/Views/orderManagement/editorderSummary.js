import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Backdrop,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./style";
import { useTheme } from "@mui/material/styles";
// Validation schema with Formik and Yup

const OrderManagement = ({ open, handleClose }) => {
  const theme = useTheme();
  const styless = styles(theme);
  console.log(styless);

  const style = {
    modalBox: {
      position: "absolute",
      top: "50%",
      left: "74%",
      right: 0,
      transform: "translate(-50%, -50%)",
      width: "80%",
      maxWidth: "600px",
      bgcolor: "background.paper",
      boxShadow: 22,
      p: 4,
      borderRadius: "8px",
    },
    backdrop: {
      zIndex: (theme) => theme.zIndex.modal + 1,
      color: "#33fff30f",
    },
    title: {
      marginBottom: "16px",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    formField: {
      marginBottom: "16px",
    },
  };

  const validationSchema = Yup.object({
    pickupAddress: Yup.string().required("Pickup Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contactName: Yup.string().required("Contact Name is required"),
  });

  return (
    <Box>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: style.backdrop,
        }}
      >
        <Box sx={style.modalBox}>
          <Typography sx={style.title}>Edit Pickup Details</Typography>

          <Formik
            initialValues={{
              pickupAddress: "",
              email: "",
              contactName: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              handleClose();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Pickup Address */}
                <Field name="pickupAddress">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Pickup Address"
                      fullWidth
                      sx={style.formField}
                      error={
                        touched.pickupAddress && Boolean(errors.pickupAddress)
                      }
                      helperText={touched.pickupAddress && errors.pickupAddress}
                    />
                  )}
                </Field>

                {/* Email */}
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      fullWidth
                      sx={style.formField}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  )}
                </Field>

                {/* Contact Name */}
                <Field name="contactName">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Contact Name"
                      fullWidth
                      sx={style.formField}
                      error={touched.contactName && Boolean(errors.contactName)}
                      helperText={touched.contactName && errors.contactName}
                    />
                  )}
                </Field>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save Changes
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default OrderManagement;
