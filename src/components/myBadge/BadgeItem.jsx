import styled from 'styled-components';
import Badge from './Badge';

function BadgeItem({ typeName, typeDes, badges }) {
  return (
    <BadgeItemContainer>
      <BadgeItemInfo>
        <BadgeType>
          <BadgeTypeName>{typeName}</BadgeTypeName>
          <BadgeTypeDes>{typeDes}</BadgeTypeDes>
        </BadgeType>
        <BadgeCount>
          <MyCount>{badges.length}</MyCount>/30
        </BadgeCount>
      </BadgeItemInfo>
      <BadgeContainer>
        {badges.map((badge, id) => (
          <Badge
            key={id}
            imgUrl={badge.imgUrl}
            title={badge.title}
            info={badge.info}
          />
        ))}
      </BadgeContainer>
    </BadgeItemContainer>
  );
}

const BadgeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 20px;
`;

const BadgeItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BadgeType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BadgeTypeName = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: white;
`;

const BadgeTypeDes = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: white;
`;

const BadgeCount = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: #6f7075;
  display: flex;
`;

const MyCount = styled.div`
  color: white;
`;

const BadgeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default BadgeItem;
