import styled from 'styled-components';
import AlphabetItem from './AlphabetItem';

function AlphabetBox() {
  const alphabet = new Array(26)
    .fill(0)
    .map((_, idx) => String.fromCharCode(idx + 65));

  return (
    <AlphabetBoxContainer>
      {alphabet.map((a, id) => (
        <AlphabetItem key={id} alphabet={a} />
      ))}
    </AlphabetBoxContainer>
  );
}

const AlphabetBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`;

export default AlphabetBox;
