import { useState, useRef } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const Application = () => {
  const [colorGuess, setColorGuess] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const colorInputRef = useRef('');

  const handleGameInputChange = (e) => {
    colorInputRef.current = e.target.value;
  };

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorSwatch color={correctAnswer} />
      <GameInput
        forwardedRef={colorInputRef}
        onChange={handleGameInputChange}
        onSubmit={() => {
          console.log(correctAnswer);
          
          if ( correctAnswer === colorInputRef.current) {
            setIsWinner(true);
           
          } 
          setHasGuessed(true);
        }}
        disabled={hasGuessed}
      />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
          setIsWinner(false);
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
