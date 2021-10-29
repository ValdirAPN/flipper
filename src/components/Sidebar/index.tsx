import {
  Container, Footer, Header, Menu,
} from './styles';

import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo-white.svg';
import cardsIcon from '../../assets/images/icons/cards-outline.svg';

export default function Sidebar() {
  return (
    <Container>
      <Header>
        <img src={avatar} alt="User" />
        <p>Marina Silva</p>
      </Header>

      <Menu>
        <li>
          <span>
            <img src={cardsIcon} alt="Cards" />
            Meus baralhos
          </span>
        </li>
      </Menu>

      <Footer>
        <img src={logo} alt="Logotipo Flipper" />
        <span>© 2021 Flipper</span>
      </Footer>
    </Container>
  );
}
