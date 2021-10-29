import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
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
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: dodgerblue;
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
