'use client'
import React, { PropsWithChildren } from 'react';
import { StyledNextLink } from './UpLink.styled';
import { UpLinkProps } from './types';


const UpLink = (props: PropsWithChildren<UpLinkProps>) => {
    const { className, href, underlineOnHover, children, passHref, prefetch } = props;

    return (
        <StyledNextLink
            className={className}
            href={href as any}
            $underlineOnHover={underlineOnHover}
            passHref={passHref}
            prefetch={prefetch}
        >
            {children}
        </StyledNextLink>
    );
};

export default UpLink;

