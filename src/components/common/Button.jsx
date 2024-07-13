import styled from 'styled-components';
import { darkGray, lightGray } from '../../constants/colors';

function Button({ text, backgroundColor, onClick, font }) {
  return (
    <ButtonContainer
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $font={font}
    >
      {text}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  width: 100%;
  height: 58px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 100px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) =>
    props.$backgroundColor === lightGray ? darkGray : 'white'};
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  cursor: pointer;
  ${(props) =>
    props.$font === 'Jalnan' && {
      fontFamily: 'Jalnan',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '19px',
    }}
`;

export default Button;
