import styled from 'styled-components';
import { lightGray, main, whiteGray } from '../../constants/colors';

function ToolButton({ children, width, onClick, focus }) {
  return (
    <ToolButtonContainer $width={width} $focus={focus} onClick={onClick}>
      {children}
    </ToolButtonContainer>
  );
}

const ToolButtonContainer = styled.div`
  display: flex;
  width: ${(props) => props.$width}px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  border: 1px solid ${(props) => (props.$focus ? main : lightGray)};
  background-color: ${(props) =>
    props.$focus ? 'rgba(255, 159, 90, 0.08)' : whiteGray};
  cursor: pointer;
`;

export default ToolButton;
