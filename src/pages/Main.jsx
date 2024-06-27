import styled from 'styled-components';
import MainHeader from '../components/main/MainHeader';
import FriendsFairytale from '../components/main/FriendsFairytale';
import MyFairytale from '../components/main/MyFairytale';

function Main() {
  return (
    <MainContainer>
      <MainHeader />
      <FriendsFairytale />
      <MyFairytale />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 600px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
