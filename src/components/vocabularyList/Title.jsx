import styled from 'styled-components';
import { blue } from '../../constants/colors';

function Title({ title }) {
  return (
    <TitleContainer>
      <TitleText>Title</TitleText>
      <div>{title}</div>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  width: 80%;
  aspect-ratio: 480 / 83;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 16px;
  background: white;
  box-shadow: 0px 4px 12.9px 0px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const TitleText = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  border: 1px solid ${blue};
  color: ${blue};
`;

export default Title;
