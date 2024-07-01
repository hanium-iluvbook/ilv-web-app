import styled, { keyframes } from 'styled-components';
import profileImg from '../../dummy/profile.png';
import { darkGray, lightBlack, lightGray, main } from '../../constants/colors';

function Profile() {
  const profileData = {
    img: profileImg,
    name: '김샛별',
    age: 6,
    totalCount: 1624,
    finishCount: 832,
  };

  return (
    <ProfileContainer>
      <ProfileImg src={profileData.img} />
      <ProfileInfo>
        <ProfileInfoText>
          <ProfileChildInfo>
            <ChildName>{profileData.name}</ChildName>
            <ChildAge>{profileData.age}세</ChildAge>
          </ProfileChildInfo>
          <ProfileVocaInfo>
            <FinishVoca>{profileData.finishCount}</FinishVoca>
            <TotalVoca>/{profileData.totalCount}</TotalVoca>
          </ProfileVocaInfo>
        </ProfileInfoText>
        <TotalBar>
          <FinishBar
            width={(profileData.finishCount / profileData.totalCount) * 100}
          />
        </TotalBar>
      </ProfileInfo>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.05);
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 12px;
`;

const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileInfoText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileChildInfo = styled.div`
  display: flex;
  gap: 6px;
  font-size: 18px;
  font-weight: 500;
  line-height: 19px;
`;

const ChildName = styled.div`
  color: ${lightBlack};
`;

const ChildAge = styled.div`
  color: ${darkGray};
`;

const ProfileVocaInfo = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`;

const FinishVoca = styled.div`
  color: ${main};
`;

const TotalVoca = styled.div`
  color: ${darkGray};
`;

const TotalBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${lightGray};
  position: relative;
  border-radius: 8px;
`;

const increaseAchieve = (width) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${width}%;
  }
`;

const FinishBar = styled.div`
  animation: ${(props) => increaseAchieve(props.width)} 0.5s forwards;
  animation-timing-function: ease-out;
  height: 8px;
  background-color: ${main};
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Profile;
