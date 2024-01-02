import React from 'react';
import {  FormControl, Select } from './UpDropdown.styled';
import { DropdownProps } from './types';

const UpDropdown: React.FC<DropdownProps> = ({ options, onSelectChange }) => {
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelectChange(selectedOption || undefined);
  };

  return (
    <FormControl>
      <Select onChange={handleDropdownChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default UpDropdown;