"use client";

import * as React from "react";
import  { useUserProfile } from "@/hooks/useAuth";
import TableContainer from "@mui/material/TableContainer";
import {
  StyledButton,
  StyledTableCell,
  StyledTableRow,
  TableStyled,
} from "./CustomerDetails.styled";
import {
  FormStyled,
  SubmitButton,
} from "../customerAdd/CustomerAddList.styled";
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import UpModal from "@/ui-component/UpModal/UpModal";
import UpIcon from "@/ui-component/UpIcon/UpIcon";
import UpSwitch from "@/ui-component/UpSwitch/UpSwitch";
import FormInputModal from "../customerModal/CustomerModal";
import { UpButton } from "@/ui-component/UpButton/UpButton";
import { useDeleteCustomer } from "@/hooks/useDocumentV1";

const CustomerDetails = (props: any) => {
  const {
    toggleModal,
    modalOpen,
    onSubmit,
    form,
    handleToggle,
    navigateToUser,
    handleUpdate,
    customers,
    closeModal,
    filterCustomerData,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  const { handleSubmit, control } = form;
  const { deleteCustomer } = useDeleteCustomer();

  const sortedData = [...filterCustomerData].sort((a, b) =>
   a.fname.localeCompare(b.fname));

  const renderSwitch = (customer: any) => {
    return (
      <>
        <UpSwitch
          control={control}
          checked={customer.status}
          onChange={() => handleToggle(customer)}
          // onChange={() => handleToggle && handleToggle(customer)}
        />
        {customer.status ? "Active" : "InActive"}
      </>
    );
  };

  const renderUpdateModal = () => {
    return (
      <UpModal isOpen={modalOpen} onClick={toggleModal}>
        <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInputModal control={form.control} onSubmit={SubmitButton} />
          <UpButton variant="contained" onClick={closeModal}>
            Close
          </UpButton>
        </FormStyled>
      </UpModal>
    );
  };

  const renderButtons = (customer: any) => {
    console.log(customer);
    return (
      <>
        <StyledButton onClick={() => navigateToUser(customer)}>

          <UpIcon name="eyeIcon" size="small" />
        </StyledButton>

        <StyledButton onClick={() => handleUpdate(customer)}>
          <UpIcon size="small" name="editIcon" color="white" />
        </StyledButton>

        <StyledButton onClick={() => deleteCustomer(customer.id)}>
          <UpIcon size="small" name="deleteIcon" color="red" />
        </StyledButton>
      </>
    );
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return (
    <>
      <TableStyled>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Company Name</StyledTableCell>
                <StyledTableCell align="center">Phone Number</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            {sortedData && sortedData.length === 0 ? (
              <h3>No customers found</h3>
            ) : (
              <>
                <TableBody>
                  {sortedData &&  
                    sortedData
                      .slice(startIndex, endIndex)
                      .map((customer: any) => (
                        <StyledTableRow key={customer.id}>
                          <StyledTableCell align="center">
                            {customer.fname}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {customer.lname}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {customer.email}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {customer.companyName}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {customer.phoneNumber}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {renderSwitch(customer)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {renderUpdateModal()}
                            {renderButtons(customer)}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                </TableBody>
              </>
              
            )}
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={customers && customers.length}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
          />
        </TableContainer>
      </TableStyled>
    </>
  );
};

export default CustomerDetails;
