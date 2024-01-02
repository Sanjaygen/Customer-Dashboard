'use client'
import { useState } from "react";
import { CollapseProps} from "./types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";


const UpCollapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box>
    <Typography variant="h6" component="div">
      {title}
      <IconButton onClick={toggleCollapsible}>
        {isOpen ? '[-]' : '[+]'}
      </IconButton>
    </Typography>
    <Collapse in={isOpen}>
      <div>{children}</div>
    </Collapse>
  </Box>
  );
};

export default UpCollapse;