export interface CheckboxProps {
    label: string;
    checked: boolean;
    testid: string;
    name: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }