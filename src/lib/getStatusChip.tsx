import { Chip } from "@mui/material";
import React from "react";

export const getStatusChip = (
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled"
) => {
  switch (status) {
    case "Pending":
      return <Chip variant="outlined" label={status} color="warning" />;
    case "Shipped":
      return <Chip variant="outlined" label={status} color="primary" />;
    case "Delivered":
      return <Chip variant="outlined" label={status} color="success" />;
    case "Cancelled":
      return <Chip variant="outlined" label={status} color="error" />;
    default:
      return <Chip variant="outlined" label={status} />;
  }
};
