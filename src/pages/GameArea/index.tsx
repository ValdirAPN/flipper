// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import FlashCard from '../../components/FlashCard';
import { Container } from './styles';

import decksJson from '../../services/decks.json';

export default function GameArea() {
  const { id } = useParams<{ id: string }>();

  const deck = decksJson.decks.find((decks) => String(decks.id) === id);

  const card = {
    question: deck!.questions[0].title!,
    answer: deck!.questions[0].answer!,
  };

  return (
    <Container>
      <FlashCard card={card} />
    </Container>
  );
}
