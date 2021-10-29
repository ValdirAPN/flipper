import { Link } from 'react-router-dom';
import { Container } from './styles';

interface DeckProps {
  deckInfo: {
    id: number,
    name: string
  };
}

export default function Deck({ deckInfo }: DeckProps) {
  return (
    <Container>
      <h3>{deckInfo.name}</h3>
      <Link to={`/play/${deckInfo.id}`}>Jogar</Link>
    </Container>
  );
}
