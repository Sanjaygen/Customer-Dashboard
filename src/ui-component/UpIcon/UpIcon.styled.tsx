import styled from "@mui/material/styles/styled";
import { UpIconSizeType } from "./type";

const iconSize = {
    xxSmall: '8px',
    xSmall: '13px',
    small: '16px',
    medium: '20px',
    large: '24px',
    xLarge: '30px'
};

export const IconContainer = styled('div')<{ size: UpIconSizeType }>`
    display: flex;
    place-content: center;
    place-items: center;
    svg {
        width: ${({ size }) => iconSize[size]};
        height: ${({ size }) => iconSize[size]};
    }
`;
