import FlashCard from "../../components/FlashCard";
import { Container } from "./styles";

import questions from '../../services/Questions.json';

export default function Home() {
  return (
    <Container>
      <FlashCard question={questions.questions[0].title} answer={questions.questions[0].answer} />
    </Container>
  );
}