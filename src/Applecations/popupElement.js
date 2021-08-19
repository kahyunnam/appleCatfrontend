import styled from 'styled-components';

export const Create = styled.aside`
  position: fixed;
  width: 69%;
  z-index: 100;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;

  transition: 0.3s ease-in-out;
  opacity: ${({ openCreate }) => (openCreate ? '100%' : '0')};
  top: ${({ openCreate }) => (openCreate ? '0' : '-100%')};
`;