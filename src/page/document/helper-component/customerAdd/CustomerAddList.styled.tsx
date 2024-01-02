import { UpButton } from "@/ui-component/UpButton/UpButton";
import UpModal from "@/ui-component/UpModal/UpModal";
import styled from "styled-components";


export const FormStyled = styled("form")`
//  height:100%;
//  width:300px;
//  padding: 20px;
`;

export const ModelStyled = styled(UpModal)`

`;
export const AddButton = styled(UpButton)`
  position:relative;
  background-color:red;
  width:200px;
  right:20px;
  top: 100px
`;

export const SubmitButton = styled(UpButton)`
    width: 50%;
`;