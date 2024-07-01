import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/play.svg';
import { Link } from 'react-router-dom';

function VocabularyListItem({ title, finishCount, totalCount, color }) {
  return (
    <VocabularyListItemContainer color={color}>
      <TitleContainer>
        <Title>{title}</Title>
        <Link to="/vocabularyList">
          <StartBtn color={color}>
            <Play fill={color} />
            Start
          </StartBtn>
        </Link>
      </TitleContainer>
      <Count>
        {finishCount}/{totalCount}
      </Count>
    </VocabularyListItemContainer>
  );
}

const VocabularyListItemContainer = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 5px 0px #00000014;
`;

const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 80%;
  overflow: hidden;
  color: white;
  font-size: 26px;
  font-weight: 700;
  line-height: 28px;
  word-break: keep-all;
`;

const StartBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  color: ${(props) => props.color};
  gap: 4px;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 300px;
  border: none;
  box-shadow: 0px 4px 13px 0px #0000001a;
  cursor: pointer;
`;

const Count = styled.div`
  font-size: 60px;
  padding-left: 20px;
  font-weight: 700;
  line-height: normal;
  color: white;
`;

export default VocabularyListItem;
