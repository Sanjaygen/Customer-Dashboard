import { FormControl, MenuItem, Select } from "@mui/material";
import { UpSelectProps } from "./types";

const UpSelect: React.FC<UpSelectProps> = ({
  options,        
  id,
  multiple,
  selectedValues,
  handleChange,
}) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId={id}
        id={id}
        value={selectedValues}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UpSelect;
