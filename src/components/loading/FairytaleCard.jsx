import styled from 'styled-components';
import { green, main } from '../../constants/colors';
import { ReactComponent as RabbitShadow } from '../../assets/rabbitShadow.svg';
import { ReactComponent as HangmanCard } from '../../assets/hangmanCard.svg';

function FairytaleCard({ type }) {
  return (
    <FairytaleCardContainer $type={type}>
      <English>{type === 'game' ? 'Game ' : 'English'}</English>
      {type === 'game' ? (
        <HangmanCard style={{ position: 'absolute', right: 0, bottom: 0 }} />
      ) : (
        <RabbitShadow style={{ position: 'absolute', right: 0, bottom: 0 }} />
      )}
      <CardInfo>
        <CardTitle>
          {type === 'game' ? '행맨 게임하기 ' : '나만의 동화책'}
        </CardTitle>
        <CardDes>
          {type === 'game'
            ? '기다리는동안 행맨 게임을 해볼까요?'
            : '세상에 하나밖에 없는 나만의 이야기'}
        </CardDes>
      </CardInfo>
    </FairytaleCardContainer>
  );
}

const FairytaleCardContainer = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 16.198px;
  background-color: ${(props) => (props.$type === 'game' ? green : main)};
  box-shadow: 0px 4px 26px 0px rgba(0, 0, 0, 0.19);
  position: relative;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 28px;
`;

const English = styled.div`
  display: flex;
  width: 78px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  line-height: 30px;
  color: white;
`;

const CardDes = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  color: white;
`;

export default FairytaleCard;
