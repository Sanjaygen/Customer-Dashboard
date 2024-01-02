import { ButtonProps as MUIButtonProps } from "@mui/material"

export type UpButtonProps = Pick<
    MUIButtonProps,
    | 'size'
    | 'variant'
    | 'disabled'
    | 'type'
    | 'onBlur'
    | 'onClick'
    | 'onChange'
    | 'className'
    > 