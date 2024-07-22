import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import profile from '../../dummy/profile.png';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <MainHeaderContainer>
      <Header>
        <Logo />
        <Link to={'/myBadge'}><Profile src={profile} /></Link>
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
`;

const Profile = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 300px;
  object-fit: cover;
  cursor: pointer;
`;

export default MainHeader;
