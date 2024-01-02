import { AlertContainer } from "./UpAlert.styled";
import { AlertProps } from "./types";

const UpAlert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
    return (
    <AlertContainer type={type}>{message}</AlertContainer>
    )
  };

  export default UpAlert;