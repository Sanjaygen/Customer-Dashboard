import { SelectChangeEvent } from '@mui/material';

export interface UpSelectProps {
    options: OptionsProps[];
    id?: string;
    multiple?: boolean;
    selectedValues: any;
    handleChange: (event: SelectChangeEvent | any) => void;
}

export interface OptionsProps {
    value: string;
    label: string;
}
