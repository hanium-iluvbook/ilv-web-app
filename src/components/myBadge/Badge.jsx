import styled from 'styled-components';

function Badge({ imgUrl, title, info }) {
  return (
    <BadgeContainer>
      <BadgeImg src={imgUrl} />
      <BadgeInfo>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </BadgeInfo>
    </BadgeContainer>
  );
}

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const BadgeImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const BadgeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: white;
`;

const Info = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: #98989e;
`;

export default Badge;
