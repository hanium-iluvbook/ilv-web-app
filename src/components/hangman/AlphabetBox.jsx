import styled from 'styled-components';
import AlphabetItem from './AlphabetItem';
import { useContext, useEffect, useState } from 'react';
import { HangmanContext } from '../../context/HangmanContext';

function AlphabetBox() {
  const { answer } = useContext(HangmanContext);
  const [alphabet, setAlphabet] = useState(null);

  useEffect(() => {
    if (answer.length > 8) {
      setAlphabet(
        new Array(26).fill(0).map((_, idx) => String.fromCharCode(idx + 65))
      );
    } else {
      let randAlphabet = new Array(26)
        .fill(0)
        .map((_, idx) => String.fromCharCode(idx + 65))
        .map((v) => (answer.includes(v) ? '' : v))
        .join('')
        .split('');

      const shuffled = [...randAlphabet].sort(() => 0.5 - Math.random());
      randAlphabet = shuffled.slice(0, answer.length * 2);
      randAlphabet = randAlphabet
        .concat([...new Set(answer.split(''))])
        .sort(() => 0.5 - Math.random());
      setAlphabet(randAlphabet);
    }
  }, [answer]);

  return (
    <AlphabetBoxContainer>
      {alphabet &&
        alphabet.map((a, id) => <AlphabetItem key={id} alphabet={a} />)}
    </AlphabetBoxContainer>
  );
}

const AlphabetBoxContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`;

export default AlphabetBox;
