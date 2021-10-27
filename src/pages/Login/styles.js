import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 54px;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 0 1rem;
    outline: none;

    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};

    & + input {
      margin-top: 16px;
    }

    &::placeholder {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.secondary};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    width: 100%;
    height: 54px;
    border: 0;
    border-radius: 8px;
    margin-top: 1rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;

    font-weight: 800;
    font-size: 1.4rem;
  
    transition: 0.2s ease-in;
    
    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  a {
    color: #fff;
    margin-top: 0.5rem;
  }

  .login-with-google {
    font-size: 1.2rem;
    background: ${({ theme }) => theme.colors.action};
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 1rem;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.actionDark};
    }
  }
`;