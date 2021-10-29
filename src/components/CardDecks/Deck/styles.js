import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  transition: 0.2s ease-in;

  h3 {
    flex: 4;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  a {
    width: 100%;
    text-align: center;
    padding: 8px 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.action};
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    }
  }
`;
