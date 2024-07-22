import styled from 'styled-components';
import Layout from '../components/Layout';
import { lightBlack } from '../constants/colors';
import profile from '../dummy/profile.png';
import BadgeItem from '../components/myBadge/BadgeItem';
import badge0 from '../dummy/badge0.png';
import badge1 from '../dummy/badge1.png';
import badge2 from '../dummy/badge2.png';
import badge3 from '../dummy/badge3.png';
import badge4 from '../dummy/badge4.png';
import badge5 from '../dummy/badge5.png';
import badge6 from '../dummy/badge6.png';
import badge7 from '../dummy/badge7.png';
import badge8 from '../dummy/badge8.png';
import badge9 from '../dummy/badge9.png';
import badge10 from '../dummy/badge10.png';
import badge11 from '../dummy/badge11.png';
import badge12 from '../dummy/badge12.png';
import badge13 from '../dummy/badge13.png';
import badge14 from '../dummy/badge14.png';
import badge15 from '../dummy/badge15.png';
import badge16 from '../dummy/badge16.png';

function MyBadge() {
  const badgeInfo = [
    {
      typeName: '활동 배찌',
      typeDes: '활동 하는만큼 나의 영어실력은 쑥쑥',
      badges: [
        {
          imgUrl: badge0,
          title: '나의 이야기',
          info: '동화 생성하기',
        },
        {
          imgUrl: badge1,
          title: '1일 접속',
          info: '꾸준함의 첫 시작',
        },
        {
          imgUrl: badge2,
          title: '7일 접속',
          info: '의미있는 한 주',
        },
        {
          imgUrl: badge3,
          title: '30일 접속',
          info: '한달동안 꾸준히',
        },
      ],
    },
    {
      typeName: '성취 배찌',
      typeDes: '활동 하는만큼 나의 영어실력은 쑥쑥',
      badges: [
        {
          imgUrl: badge4,
          title: '동화 워밍업',
          info: '30분동안 동화보기',
        },
        {
          imgUrl: badge5,
          title: '동화 열정!',
          info: '1시간동안 동화보기',
        },
        {
          imgUrl: badge6,
          title: '퀴즈 워밍업',
          info: '30분동안 퀴즈 풀기',
        },
        {
          imgUrl: badge7,
          title: '퀴즈 열정!',
          info: '1시간동안 퀴즈 풀기',
        },
        {
          imgUrl: badge8,
          title: '3등도 잘했어!',
          info: '중간평가 퀴즈 3등하기',
        },
        {
          imgUrl: badge9,
          title: '1000개 단어',
          info: '단어 100개 학습하기',
        },
      ],
    },
    {
      typeName: '동화 배찌',
      typeDes: '활동 하는만큼 나의 영어실력은 쑥쑥',
      badges: [
        {
          imgUrl: badge10,
          title: '펑!',
          info: '선택형에서 선물주기 선택',
        },
        {
          imgUrl: badge11,
          title: '슉슈슉',
          info: '액션동화 1개 생성',
        },
        {
          imgUrl: badge12,
          title: '마법사',
          info: '1시간동안 퀴즈 풀기',
        },
        {
          imgUrl: badge13,
          title: '작은별',
          info: '우주동화 1개 생성',
        },
        {
          imgUrl: badge14,
          title: '판타지 월드',
          info: '판타지동화 1개 생성',
        },
        {
          imgUrl: badge15,
          title: '아티스트',
          info: '다양한 키워드로 동화생성',
        },
        {
          imgUrl: badge16,
          title: '메리 크리스마스!',
          info: '크리스마스 동화 생성',
        },
      ],
    },
  ];

  return (
    <Layout backgroundColor={lightBlack} color={'white'}>
      <VocabularyListContainer>
        <VocabularyListText>
          <VocabularyList>나만의 배찌</VocabularyList>
        </VocabularyListText>
        <Profile>
          <ProfileImg src={profile} />
          <ProfileInfo>
            <UserInfo>
              <Name>김샛별</Name>
              <Age>6세</Age>
            </UserInfo>
            <Count>17/90</Count>
          </ProfileInfo>
          <BadgeCountBox>
            <BadgeCountItem>
              <BadgeCount>
                <MyCount>4</MyCount>/30
              </BadgeCount>
              <BadgeType>활동 배찌</BadgeType>
            </BadgeCountItem>
            <BadgeCountItem>
              <BadgeCount>
                <MyCount>6</MyCount>/30
              </BadgeCount>
              <BadgeType>성취 배찌</BadgeType>
            </BadgeCountItem>
            <BadgeCountItem>
              <BadgeCount>
                <MyCount>7</MyCount>/30
              </BadgeCount>
              <BadgeType>동화 배찌</BadgeType>
            </BadgeCountItem>
          </BadgeCountBox>
        </Profile>
      </VocabularyListContainer>
      {badgeInfo.map((badge, id) => (
        <BadgeItem
          key={id}
          typeName={badge.typeName}
          typeDes={badge.typeDes}
          badges={badge.badges}
        />
      ))}
    </Layout>
  );
}

const VocabularyListContainer = styled.div`
  width: 100%;
  min-height: calc(100vh -80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VocabularyListText = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

const VocabularyList = styled.div`
  font-family: 'Jalnan';
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  padding-left: 20px;
  color: white;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
`;

const ProfileImg = styled.img`
  border-radius: 25px;
  width: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: white;
`;

const Age = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: white;
`;

const Count = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: white;
`;

const BadgeCountBox = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const BadgeCountItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BadgeCount = styled.div`
  color: #6f7075;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  display: flex;
`;

const BadgeType = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: white;
`;

const MyCount = styled.div`
  color: white;
`;

export default MyBadge;
