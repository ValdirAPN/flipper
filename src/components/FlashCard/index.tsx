import { Container } from './styles';

interface FlashCardProps {
  question: string;
  answer: string;
}

export default function FlashCard({ question, answer }: FlashCardProps) {
  return (
    <Container>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{answer}</h3>
        </div>
        <div className="flip-card-back">
          <h3>{question}</h3>
        </div>
      </div>
    </Container>
  );
}
