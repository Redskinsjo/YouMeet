import React, { useCallback } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface FieldProps {
  control: any;
  name: any;
  sx?: any;
  classes?: any;
}

export default function Field({ control, name, sx, classes }: FieldProps) {
  const formatLabel = useCallback((name) => {
    if (name.includes("_")) {
      return name
        .split("_")
        .map((el: string) => el[0].toUpperCase() + el.slice(1))
        .join(" ");
    }
    return name[0].toUpperCase() + name.slice(1);
  }, []);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          className={classes}
          label={formatLabel(name)}
          variant="standard"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          sx={sx}
          autoComplete="off"
        />
      )}
    />
  );
}
