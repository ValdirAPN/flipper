import { Container } from './styles';

interface FlashCardProps {
  card: {
    question: string
    answer: string
  };
}

export default function FlashCard({ card }: FlashCardProps) {
  return (
    <Container>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{card.question}</h3>
        </div>
        <div className="flip-card-back">
          <h3>{card.answer}</h3>
        </div>
      </div>
    </Container>
  );
}
