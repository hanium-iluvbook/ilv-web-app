import styled from 'styled-components';
import { green } from '../../constants/colors';
import { ReactComponent as CardBackground } from '../../assets/cardBackground.svg';

function VocaQuizCard({ voca }) {
  return (
    <VocaQuizContainer>
      {voca}
      <CardBackground style={{ position: 'absolute', top: 0, left: 0 }} />
    </VocaQuizContainer>
  );
}

const VocaQuizContainer = styled.div`
  width: 100%;
  aspect-ratio: 312/140;
  border-radius: 16px;
  background: ${green};
  box-shadow: 0px 4px 14.7px 0px rgba(0, 0, 0, 0.17);
  color: white;
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export default VocaQuizCard;
