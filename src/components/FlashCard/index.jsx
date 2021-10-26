import PropTypes from 'prop-types'
// import { useState } from 'react';

import { Container } from "./styles";

export default function FlashCard({ question, answer }) {
  // const [isFlipped, setIsFlipped] = useState(false);

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

FlashCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}