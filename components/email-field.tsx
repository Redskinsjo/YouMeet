import { TextField, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";

interface EmailFieldProps {
  control: any;
  name: any;
}

const EmailField = ({ control, name }: EmailFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name } }) => {
        return (
          <div>
            <TextField
              onChange={(e) => onChange(e.target.value)}
              value={value}
              name={name}
              variant="outlined"
              label={name[0].toUpperCase() + name.slice(1)}
              multiline={name === "text" && true}
              fullWidth
            />
          </div>
        );
      }}
    />
  );
};

export default EmailField;
