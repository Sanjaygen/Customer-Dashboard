import Modal from "../document/helper-component/customerAdd/CustomerAddList";
import { ListWrapper, ModalStyledWrapper } from "./OverView.styled";
import CustomizedTables from "./helper-component/OverViewTable";

function OverView() {
  return (
    <>

      <ListWrapper>
        <CustomizedTables/>
      </ListWrapper>
    </>
  );
}

export default OverView;
