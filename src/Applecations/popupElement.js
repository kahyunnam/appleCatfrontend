import styled from 'styled-components';

export const Create = styled.aside`
  position: fixed;
  z-index: 100;
  width: 60%;
  height: 100vh;
  min-height: 600px;
  overflow:auto;
  // background: rgba(255, 255, 255, 0.5);

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;

  transition: 2s ease-in-out;

  opacity: ${({ openCreate }) => (openCreate ? '100%' : '0')};
  top: ${({ openCreate }) => (openCreate ? '0' : '-100%')};
`;