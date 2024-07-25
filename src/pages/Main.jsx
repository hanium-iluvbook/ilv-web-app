import styled from 'styled-components';
import MainHeader from '../components/main/MainHeader';
import MyFairytale from '../components/main/MyFairytale';

function Main() {
  return (
    <MainContainer>
      <MainHeader />
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
  align-items: center;
  gap: 16px;
`;
