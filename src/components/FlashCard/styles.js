import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 400px;
  height: 300px;  
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 8px;

    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
  }

  .flip-card-front {
    background-color: #fff;
    color: black;
  }

  .flip-card-back {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: rotateY(180deg);
  }
  
  /* width: 100%;
  max-width: 400px;
  height: 200px;
  background: aquamarine;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-user-select: none;  
  -moz-user-select: none;    
  -ms-user-select: none;      
  user-select: none; */
`;
