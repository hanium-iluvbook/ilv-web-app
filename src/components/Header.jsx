import styled from 'styled-components';
import { ReactComponent as Before } from '../assets/before.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { lightBlack } from '../constants/colors';

function Header({ backgroundColor, color, title, isFairytale }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickBeforeBtn = () => {
    if (
      location.pathname === '/fairytale' ||
      location.pathname === '/optionalFairytale'
    ) {
      sessionStorage.removeItem('selectedOptions');
      sessionStorage.removeItem('fairytale');
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <HeaderContainer $backgroundColor={backgroundColor}>
      <BeforeBtn onClick={handleClickBeforeBtn}>
        <Before stroke={color} />
      </BeforeBtn>
      <Title color={color} $isFairytale={isFairytale}>
        {title}
      </Title>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  z-index: 1;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const BeforeBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => (props.color === 'white' ? 'white' : lightBlack)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  ${(props) => props.$isFairytale && { width: '70%' }}
`;

export default Header;
