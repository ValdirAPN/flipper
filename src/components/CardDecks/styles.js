import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;