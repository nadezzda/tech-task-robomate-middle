import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/authSlice";
import { authSchema } from "../../schemas";
import { TUser } from "../../types/user";
import FormField from "../form-field";
import { loginFormFields } from "../../lib/constants";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: TUser) => {
    const user: TUser = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(user));
    navigate("/items");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={authSchema}
        onSubmit={handleSubmit}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "300px",
          }}
        >
          {loginFormFields.map((field) => (
            <FormField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
            />
          ))}{" "}
          <Button variant="contained" color="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
