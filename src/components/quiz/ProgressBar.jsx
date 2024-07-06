import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { blue, gray, lightGray } from '../../constants/colors';
import { ReactComponent as Star } from '../../assets/star.svg';
import { QuizContext } from '../../context/QuizContext';

function ProgressBar() {
    const {progress} = useContext(QuizContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ProgressBarContainer $windowWidth={windowWidth}>
      <ProgressResult >
        {new Array(10).fill(0).map((_, id) => (
          <Star key={id} fill={id < progress ? blue : gray} />
        ))}
      </ProgressResult>
      <ProgressCount>{progress}/10</ProgressCount>
    </ProgressBarContainer>
  );
}

const ProgressBarContainer = styled.div`
  width: ${(props) =>
    props.$windowWidth >= 600 ? 600 : props.$windowWidth}px;
  height: 33px;
  background-color: ${lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;

const ProgressResult = styled.div``;

const ProgressCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: ${gray};
`;

export default ProgressBar;
