import styled from "styled-components";

export const Container = styled.div`
  /* width: 200px; */
  /* height: 180px; */
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

  transition: 0.2s ease-in;
  
  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    background: ${({ theme }) => theme.colors.action};
  }
`;