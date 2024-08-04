import styled from 'styled-components';
import {
  backgroundGray,
  blue,
  darkGray,
  lightGray,
  whiteGray,
} from '../../constants/colors';
import { ReactComponent as Refresh } from '../../assets/refrash.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

function BottomNavigation() {
  const navigate = useNavigate();

  const handleClickRetry = () => {
    navigate(-2);
  };

  const handleClickHome = () => {
    sessionStorage.removeItem('selectedOptions');
    sessionStorage.removeItem('fairytale');
    navigate('/');
  };

  return (
    <BottomNavigationContainer>
      <RetryButton onClick={handleClickRetry}>
        <Refresh style={{ cursor: 'pointer' }} />
        다시 풀기
      </RetryButton>
      <Button backgroundColor={blue} onClick={handleClickHome}>
        <Home />
        홈으로
      </Button>
    </BottomNavigationContainer>
  );
}

const BottomNavigationContainer = styled.div`
  display: flex;
  width: 600px;
  padding: 8px 24px;
  gap: 8px;
  border-top: 1px solid ${lightGray};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${backgroundGray};
  z-index: 2;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const RetryButton = styled.div`
  display: flex;
  width: 70px;
  height: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  border: 1px dashed ${lightGray};
  background-color: ${whiteGray};
  color: ${darkGray};
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  cursor: pointer;
`;

export default BottomNavigation;
