import { useHistory } from 'react-router-dom';

import { FaGoogle } from 'react-icons/fa';

import { Container, FormWrapper } from "./styles";

import logo from '../../assets/images/logo-white-v1.svg'
import { Link } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  function handleLogin() {
    history.push("/dashboard");
  }

  return (
    <Container>
      <FormWrapper>
        <img src={logo} alt="Logo Flipper" />
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button
          type="button"
          onClick={handleLogin}
        >
          entrar
        </button>
        <Link to="/">Esqueci minha senha</Link>
        <button
          type="button"
          className="login-with-google"
        >
          <FaGoogle />
          <span>entrar com o Google</span>
        </button>
      </FormWrapper>
    </Container>
  );
}