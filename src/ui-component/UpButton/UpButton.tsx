'use client';
import { PropsWithChildren } from "react";

import { UpButtonProps } from "./typex";
import { Button } from "@mui/material";

const UpButton = ({children, ...props }: PropsWithChildren<UpButtonProps>) => {
  return(
      <Button {...props} disableRipple>
          {children}
      </Button>
  );
};

export { UpButton };