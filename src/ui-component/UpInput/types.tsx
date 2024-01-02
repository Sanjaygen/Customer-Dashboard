 export interface UpInputProps {
    id?: string;
    className?: string;
    placeholder?: string;
    fullWidth?: boolean;
    width?: number;
    variant?: "standard" | "outlined" | "filled";
    ariaName?: string;
    type?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    onInputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    helperText?: any;
    label?: string;
  }