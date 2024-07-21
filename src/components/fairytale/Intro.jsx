import styled from 'styled-components';
import { darkMain } from '../../constants/colors';
import KeywordsBox from '../common/KeywordsBox';
import Button from '../common/Button';

function Intro({
  displayWidth,
  title,
  summary,
  keywords,
  cover,
  setIsReading,
}) {
  const handleClickReadingBtn = () => {
    setIsReading(true);
  };

  return (
    <IntroContainer src={cover} $displayWidth={displayWidth}>
      <IntroText>
        <IntroTitle>{title}</IntroTitle>
        <KeywordsBox keywords={Object.values(keywords).flat()} />
        <IntroSummary>{summary}</IntroSummary>
      </IntroText>
      <Button backgroundColor={darkMain} onClick={handleClickReadingBtn}>
        동화 읽기
      </Button>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  width: ${(props) => props.$displayWidth}px;
  height: 100vh;
  background-size: cover;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  gap: 40px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 58.5%
    ),
    url(${(props) => props.src}) lightgray 50% / cover no-repeat;
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const IntroTitle = styled.div`
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;
  color: white;
`;

const IntroSummary = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  color: white;
`;

export default Intro;
