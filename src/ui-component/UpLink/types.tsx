import { ReactNode } from 'react';

export type UpLinkProps = {
    className?: string;
    href: string;
    underlineOnHover?: boolean;
    children: string | ReactNode;
    disabled?: boolean;
    isSsr?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
};