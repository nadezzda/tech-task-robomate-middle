import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

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
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
        }}
      >
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Password" type="password" fullWidth required />
        <Button variant="contained" color="primary" type="submit">
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
