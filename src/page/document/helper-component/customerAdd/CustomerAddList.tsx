import { SubmitHandler, useForm } from "react-hook-form";
import UpModal from "@/ui-component/UpModal/UpModal";
import { UpButton } from "@/ui-component/UpButton/UpButton";
import FormInputModal from "../customerModal/CustomerModal";
import { AddButton, FormStyled, SubmitButton } from "./CustomerAddList.styled";
import StateProvider, { useCustomerDataAdd } from "@/hooks/useDocumentV1";

type FormInputValue = {
  fname: string;
  lname: string;
  email: string;
  companyName: string;
  phoneNumber: Number;
  status: boolean;
}
const defaultValues = {
  fname: "",
  lname: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  status: true,
};

const CustomerAddList = () => {

  const { toggleModal, modalOpen, form, closeModal } = StateProvider();
  const { handleSubmit, control } = useForm<FormInputValue>({ defaultValues });
  const { mutate: customerData } = useCustomerDataAdd();

  const handleFromSubmit: SubmitHandler<FormInputValue> = (data: FormInputValue) => {
    customerData(data);
    toggleModal();
    form.reset();
  };

  return (
    <>
      <AddButton variant="contained" onClick={toggleModal}>
        Add
      </AddButton>

      <UpModal isOpen={modalOpen} onClick={toggleModal}>
        <FormStyled onSubmit={handleSubmit(handleFromSubmit)} noValidate>
          <FormInputModal control={control} onSubmit={SubmitButton} />
          <UpButton variant="contained"  onClick={closeModal}>
            Close
          </UpButton>
        </FormStyled>
      </UpModal>
    </>
  );
};

export default CustomerAddList;
