import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 130px;
  left: 500px;
  background: white;
  width: 500px;
  height: 500px;
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  border-radius: 8px;
  // background: rgba(0, 0, 0, 0.8); 

`;

export const ModalContent = styled.div`
  position: relative;
  top: 130px;
  width: 300px;


`;


export const DivWithSpacing = styled.div`
  margin-right: 16px;
`;