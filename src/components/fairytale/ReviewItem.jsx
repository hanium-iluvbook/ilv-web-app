import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/play.svg';

function ReviewItem({ title, info, button, background, color, onClick }) {
  return (
    <ReviewItemContainer $background={background}>
      <Text>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </Text>
      <Button $color={color} onClick={onClick}>
        {button}
        <Play fill={color} />
      </Button>
    </ReviewItemContainer>
  );
}

const ReviewItemContainer = styled.div`
  width: 328px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 12px;
  background: url(${(props) => props.$background});
  background-size: cover;
  padding: 26px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: white;
`;

const Info = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  color: white;
  width: 180px;
  word-break: keep-all;
`;

const Button = styled.div`
  display: flex;
  width: max-content;
  padding: 0px 16px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 300px;
  background-color: white;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.$color};
`;

export default ReviewItem;
