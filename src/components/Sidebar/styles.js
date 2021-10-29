import styled from "styled-components";

export const Container = styled.aside`
  width: 380px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 6rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 800;
    margin-top: 1rem;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;

  padding: 1rem 0;

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0.8rem 0;

      transition: 0.2s ease-in;

      &:hover {
        &::before {
          content: "";
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 8px;
          margin-right: 0.8rem;
        }

        &::after {
          content: "";
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 8px;
          margin-left: 0.8rem;
        }
      }
    }
  
    img {
      margin-right: 0.5rem;
    }

    cursor: pointer;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: #fff;
    }

    &:first-child::before {
      content: "";
      width: 100%;
      height: 1px;
      background: #fff;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;

  span {
    display: block;
    font-size: 0.8rem;
  }
`;