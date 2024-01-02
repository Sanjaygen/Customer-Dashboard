import React from "react";
import UpLink from "../UpLink/UpLink";
import {  BreadcrumbsStyled } from "./UpBreadcrumb.Styled";
import { BreadcrumbProps } from "./types";

 const UpBreadcrumb: React.FC<{ items: BreadcrumbProps[] }> = ({ items }) => {
  return (
    <BreadcrumbsStyled>
      {items.map((item) => (
        <React.Fragment key={item.path}>
          <UpLink href={item.path}>{item.label}</UpLink>
        </React.Fragment>
      ))}
    </BreadcrumbsStyled>
  );
};

export default UpBreadcrumb;