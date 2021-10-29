import { Container } from './styles';

interface DeckProps {
  deckInfo: {
    subject: string
  };
}

export default function Deck({ deckInfo }: DeckProps) {
  return (
    <Container>
      {deckInfo.subject}
    </Container>
  );
}
