import styled from 'styled-components';
import { darkGray, darkMain, lightGray, main } from '../../constants/colors';

function Button({ text }) {
  return <ButtonContainer text={text}>{text}</ButtonContainer>;
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
  background-color: ${(props) =>
    props.text === '취소하기' ? lightGray : darkMain};
  color: ${(props) => (props.text === '취소하기' ? darkGray : 'white')};
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  cursor: pointer;
`;

export default Button;
