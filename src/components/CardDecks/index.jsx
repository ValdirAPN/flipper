import Deck from "./Deck";
import { Container } from "./styles";

import decks from '../../services/decks.json';

export default function CardDecks() {
  return (
    <Container>
      {
        decks.decks.map((deck) => (
          <Deck key={deck.id} deckInfo={deck} />
        ))
      }
    </Container>
  );
}