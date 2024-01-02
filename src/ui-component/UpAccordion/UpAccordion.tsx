import { useState } from "react";
import { UpAccordionProps } from "./types";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionStyled } from "./UpAccordion.styled";


const UpAccordion = ({title, children }: UpAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionStyled expanded={isOpen} onChange={toggleAccordion}>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </AccordionStyled>

  );
};
          
export default UpAccordion;
