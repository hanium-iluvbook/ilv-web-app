import styled from 'styled-components';

function KeywordsItem({ text }) {
  return <KeywordsItemContainer>{text}</KeywordsItemContainer>;
}

const KeywordsItemContainer = styled.div`
  height: 26px;
  background: #ffffff29;
  border: 1px solid #ffffff14;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 300px;
  margin-bottom: 30px;
  color: white;
`;

export default KeywordsItem;
