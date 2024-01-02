import React from 'react';
import { StyledSwitch } from './UpSwitch.styled';


interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  control?: any;
}

const UpSwitch: React.FC<SwitchProps> = ({ checked, onChange, control }) => {
  return <StyledSwitch checked={checked} onChange={onChange} />;
};

export default UpSwitch;
