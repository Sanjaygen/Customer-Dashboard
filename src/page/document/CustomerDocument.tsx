"use client";
import StateProvider from "@/hooks/useDocumentV1";
import { AddButtonWrapper, SearchBoxStyled } from "./CustomerDocument.Styled";
import CustomerAddList from "./helper-component/customerAdd/CustomerAddList";
import { useMemo } from "react";
import CustomerDetails from "./helper-component/customerDetails/CustomerDetails";
import SearchBox from "./helper-component/search/CustomerSearch";

const CustomerDocuments = () => {
  const {
    toggleModal,
    modalOpen,
    onSubmit,
    handleUpdate,
    form,
    customers,
    handleToggle,
    navigateToUser,
    closeModal,
    handleSearchInput,
    filterCustomerData,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  
  } = StateProvider();

  const CustomerAddListProps = useMemo(() => {
    return {
      toggleModal,
      modalOpen,
    };
  }, [toggleModal, modalOpen]);

  const CustomerDetailsProps = useMemo(() => {
    return {
      onSubmit,
      toggleModal,
      handleUpdate,
      form,
      modalOpen,
      customers,
      handleToggle,
      navigateToUser,
      closeModal,
      filterCustomerData,
      page,
      rowsPerPage,
      handleChangePage,
      handleChangeRowsPerPage,
    };
  }, [
    onSubmit,
    toggleModal,
    handleUpdate,
    form,
    modalOpen,
    customers,
    handleToggle,
    navigateToUser,
    closeModal,
    filterCustomerData,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  ]);

  const CustomerSearchBox = useMemo(() => {
    return {
      handleSearchInput,
    };
  }, [handleSearchInput]);
  return (
    <>
      <SearchBoxStyled>
        <SearchBox {...CustomerSearchBox} />
      </SearchBoxStyled>

      <AddButtonWrapper>
        <CustomerAddList {...CustomerAddListProps}  />
      </AddButtonWrapper>

      <CustomerDetails {...CustomerDetailsProps} />
    </>
  );
};

export default CustomerDocuments;
