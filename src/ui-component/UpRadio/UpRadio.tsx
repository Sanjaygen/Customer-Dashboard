import { FC } from "react";
import { RadioButtonProps } from "./types";
import { RadioGroup, RadioInput } from "./UpRadio.Styled";

const UpRadio: FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <RadioGroup>
      <RadioInput type="radio" {...props} />
      {label}
    </RadioGroup>
  );
};

export default UpRadio;