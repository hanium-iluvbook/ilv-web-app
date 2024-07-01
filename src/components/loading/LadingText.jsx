import styled from 'styled-components';
import { darkGray, lightBlack, lightGray } from '../../constants/colors';

function LoadingText() {
  return (
    <LoadingTextContainer>
      <LoadingTitle>
        두구두구
        <br />
        어떤 동화책이 만들어질까?
      </LoadingTitle>
      <LoadingInfo>
        여러분 알고계셨나요?
        <br />
        사과엔 눈이 없어요 하하하
      </LoadingInfo>
    </LoadingTextContainer>
  );
}

const LoadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  text-align: center;
  padding: 28px 0px 54px 0px;
`;

const LoadingTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  color: ${lightBlack};
`;

const LoadingInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  color: ${darkGray};
`;

export default LoadingText;
