import styled from "styled-components";

 export const AlertContainer = styled.div<{ type: string }>`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  ${({ type }) => {
    switch (type) {
      case 'success':
        return 'background-color: #d4edda; color: #155724;';
      case 'error':
        return 'background-color: #f8d7da; color: #721c24;';
      case 'info':
        return 'background-color: #d1ecf1; color: #0c5460;';
      default:
        return 'background-color: #ffffff; color: #000000;';
    }
  }}
`;