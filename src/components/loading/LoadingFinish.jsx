import styled from 'styled-components';
import { ReactComponent as Check } from '../../assets/check.svg';
import { darkGray, lightBlack } from '../../constants/colors';

function LoadingFinish() {
  return (
    <LoadingFinishContainer>
      <Check />
      <LoadingFinishInfo>
        <LoadingFinishTitle>나만의 동화 완성!</LoadingFinishTitle>
        <LoadingFinishDes>
          동화책이 만들어졌어요
          <br />
          이야기를 읽으로 가볼까요?
        </LoadingFinishDes>
      </LoadingFinishInfo>
    </LoadingFinishContainer>
  );
}

const LoadingFinishContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const LoadingFinishInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

const LoadingFinishTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  color: ${lightBlack};
`;

const LoadingFinishDes = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  color: ${darkGray};
`;

export default LoadingFinish;
