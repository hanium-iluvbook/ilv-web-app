import styled from 'styled-components';
import { ReactComponent as Before } from '../assets/before.svg';
import { useNavigate } from 'react-router-dom';
import { lightBlack } from '../constants/colors';

function Header({ backgroundColor, color, title, padding }) {
  const navigate = useNavigate();

  const handleClickBeforeBtn = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer $backgroundColor={backgroundColor}>
      <BeforeBtn onClick={handleClickBeforeBtn}>
        <Before stroke={color} />
      </BeforeBtn>
      <Title color={color}>{title}</Title>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  padding: 20px 16px 0px 16px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BeforeBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.color === 'white' ? 'white' : lightBlack };
`;

export default Header;
