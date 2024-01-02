import { UpButton } from "@/ui-component/UpButton/UpButton";
import FormInput from "@/ui-component/form/input";
import { FormInputSapecing } from "./CustomerModel.styled";

const FormInputModal = ({ control, SubmitButton }: any) => {
  return (
    <>
      <FormInput
        control={control}
        name="fname"
        placeholder="Enter the First Name"
      />

      <FormInputSapecing />

      <FormInput
        control={control}
        name="lname"
        placeholder="Enter the Last Name"
      />

      <FormInputSapecing />

      <FormInput
        control={control}
        name="email"
        placeholder="Enter the Email Address"
      />

      <FormInputSapecing />

      <FormInput
        control={control}
        name="companyName"
        placeholder="Enter the Company Name"
      />

      <FormInputSapecing />

      <FormInput
        control={control}
        name="phoneNumber"
        placeholder="Enter the Phone Number"
      />

      <FormInputSapecing />
      
      <UpButton type="submit" variant="contained" onClick={SubmitButton}>
        Submit
      </UpButton>
    </>
  );
};
export default FormInputModal;
