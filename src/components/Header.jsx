import styled from 'styled-components';
import { ReactComponent as Before } from '../assets/before.svg';
import { useNavigate } from 'react-router-dom';

function Header({ backgroundColor, color, title }) {
  const navigate = useNavigate();

  const handleClickBeforeBtn = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer $backgroundColor={backgroundColor} color={color}>
      <BeforeBtn onClick={handleClickBeforeBtn}>
        <Before stroke={color} />
      </BeforeBtn>
      <Title>{title}</Title>
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
  color: ${(props) => props.color};
  position: absolute;
  top: 0;
  left: 0;
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
`;

export default Header;