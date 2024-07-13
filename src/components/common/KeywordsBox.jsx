import styled from 'styled-components';
import KeywordsItem from './KeywordsItem';

function KeywordsBox({ keywords }) {
  return (
    <KeywordsBoxContainer>
      {keywords.map((keyword, id) => (
        <KeywordsItem key={id} text={keyword} />
      ))}
    </KeywordsBoxContainer>
  );
}

const KeywordsBoxContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default KeywordsBox;
