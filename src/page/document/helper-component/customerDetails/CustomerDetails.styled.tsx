import { UpButton } from "@/ui-component/UpButton/UpButton";
import {
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import styled from "styled-components";

export const TableStyled = styled(TableContainer)`
  margin-left: 290px;
  width: 80%;
  margin-top: 150px;
  
`;
export const StyledButton = styled(UpButton)`
  background-color: white;
`;
// export const PaginationContainer = styled("div")``;

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "	#300000 ",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)`
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
`;

// export const TablePaginationStyled = styled(TablePagination)`
//   width: 100px;
// `;
