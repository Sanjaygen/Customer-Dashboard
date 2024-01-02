import { styled } from '@mui/material';
import NextLink from 'next/link';

type StyledProps = {
    disabled?: boolean;
    $underlineOnHover?: boolean;
};

export const linkDefaultStyles = `
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    text-decoration: none;
    transition: transform 120ms linear;
    color: inherit;
    &:focus {
        outline: none;
        text-decoration: underline;
    }
`;

const getLinkStyles = ({ disabled, $underlineOnHover = true }: StyledProps) => {
    if (disabled) {
        return `
            cursor: default;
            pointer-events: all;
            opacity: 0.6;
        `;
    } else if ($underlineOnHover) {
        return `&:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-color: currentcolor;
        }`;
    }
    return '';
};
const options = {
    shouldForwardProp: (propKey: string) => propKey !== '$underlineOnHover'
};

export const StyledNextLink = styled(NextLink, options)<StyledProps>`
    ${linkDefaultStyles};
    ${getLinkStyles}
`;
