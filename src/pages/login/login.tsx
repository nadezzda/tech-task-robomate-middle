import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { authSchema } from "../../schemas";

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={authSchema}
        onSubmit={(values) => {
          console.log("Form submitted", values);
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "300px",
            }}
          >
            <div>
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </div>
            <div>
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginPage;
