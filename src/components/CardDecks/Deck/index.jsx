import PropTypes from 'prop-types';

import { Container } from "./styles";

export default function Deck({ deckInfo }) {
  console.log("Deck", deckInfo)
  return (
    <Container>
      {deckInfo.subject}
    </Container>
  );
}

Deck.propTypes = {
  deckInfo: PropTypes.object.isRequired
}