import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function MainHeader() {
  return (
    <MainHeaderContainer>
      <Header>
        <Logo />
        응애
      </Header>
    </MainHeaderContainer>
  );
}

const MainHeaderContainer = styled.div`
  width: 100vw;
  height: 58px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const Header = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default MainHeader;
