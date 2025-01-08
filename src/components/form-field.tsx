import React from "react";
import { Field, FieldProps } from "formik";
import { TextField } from "@mui/material";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  fullWidth?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  fullWidth = true,
  helperText = "",
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <TextField
            {...field}
            label={label}
            type={type}
            fullWidth={fullWidth}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : helperText}
          />
        )}
      </Field>
    </div>
  );
};

export default FormField;
