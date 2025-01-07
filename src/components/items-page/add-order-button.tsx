import React from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface AddOrderButtonProps {
  onClick: () => void;
}

const AddOrderButton: React.FC<AddOrderButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginBottom: 2 }}
      onClick={onClick}
    >
      <AddIcon />
      Add Order
    </Button>
  );
};

export default AddOrderButton;
