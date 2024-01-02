'use client'
import styled from "styled-components";

export const DrawerStyled = styled.div<{ open: boolean }>`
  width: 300px;
  height: 100%;
  background-color: #f0f0f0;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
`;

//  export const DrawerContent = styled.div`
//   padding: 20px;
// `;