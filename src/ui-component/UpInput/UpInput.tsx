import { FormControl, Input } from "@mui/material";
import { UpInputProps } from "./types";
import { HelperText } from "./UpInput.styled";

const UpInput = (props: UpInputProps) => {
  const {
    id = "input",
    className,
    placeholder = "Please Enter Here",
    fullWidth,
    width = 100,
    variant = "outlined",
    ariaName = "input",
    type = "text",
    startAdornment,
    endAdornment,
    onInputHandler,
    value,
    helperText,
    label,
  } = props;

  const renderHelperText = () => {
    if (helperText) {
      return (
        <HelperText error id="outlined-weight-helper-text">
          {helperText}
        </HelperText>
      );
    }
  };
  return (
    <FormControl
      sx={{ width: `${fullWidth ? 100 : width}%` }}
      variant={variant}
      className={className}
    >
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        aria-describedby={id}
        inputProps={{
          "aria-label": ariaName,
        }}
        value={value}
        onChange={onInputHandler}
      />
      {renderHelperText()}
    </FormControl>
  );
};
export default UpInput;
