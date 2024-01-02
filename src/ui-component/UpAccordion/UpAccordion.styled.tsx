import { Accordion } from "@mui/material";
import styled from "styled-components";

export const AccordionStyled = styled(Accordion)`
  border: 1px solid #ddd;
  margin: 10px;
`;

export const Typography = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;

export const AccordionDetails = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 10px;
`;
