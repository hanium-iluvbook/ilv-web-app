import { useContext, useEffect, useState } from 'react';
import { HangmanContext } from '../../context/HangmanContext';
import styled, { css } from 'styled-components';
import { darkGray, lightGray, main } from '../../constants/colors';

function AlphabetItem({ alphabet }) {
  const {
    failCount,
    setFailCount,
    correctAlphabets,
    setCorrectAlphabets,
    answer,
    isFinish,
    setIsFinish,
  } = useContext(HangmanContext);

  const answerAlphabetLength = new Set(answer.split('')).size;

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (failCount === 0) setSelected(false);
  }, [failCount]);

  const checkCorrectAlphabet = () => {
    if (answer.includes(alphabet)) {
      const newCorrectAlphabets = [...correctAlphabets];
      newCorrectAlphabets.push(alphabet);
      setCorrectAlphabets(newCorrectAlphabets);
    } else {
      setFailCount((prev) => prev + 1);
    }
  };

  const checkFinish = () => {
    if (answerAlphabetLength === correctAlphabets.length + 1) {
      setIsFinish(true);
    }
    console.log(answerAlphabetLength, correctAlphabets.length);
  };

  const handleClickAlphabet = () => {
    if (selected || isFinish) return;
    setSelected(true);
    checkCorrectAlphabet();
    checkFinish();
  };

  return (
    <AlphabetItemContainer
      selected={selected}
      $isFinish={isFinish}
      onClick={handleClickAlphabet}
    >
      {alphabet}
    </AlphabetItemContainer>
  );
}

const selectedStyle = css`
  background: ${lightGray};
  color: ${darkGray};
`;

const nonSelectedStyle = css`
  background: white;
  color: ${main};
  cursor: ${(props) => (props.$isFinish ? 'default' : 'pointer')};
`;

const AlphabetItemContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.selected ? selectedStyle : nonSelectedStyle)}
  border-radius: 4px;
  box-shadow: 0px 4px 12.9px 0px rgba(0, 0, 0, 0.05);
  font-family: 'Jalnan';
  font-size: 20px;
  line-height: 19px;
`;

export default AlphabetItem;
