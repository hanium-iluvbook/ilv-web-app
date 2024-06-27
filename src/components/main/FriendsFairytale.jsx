import styled from 'styled-components';
import { green } from '../../constants/colors';
import background from '../../assets/background.png';
import { ReactComponent as Play } from '../../assets/play.svg';

function FriendsFairytale() {
  return (
    <FriendsFairytaleContainer>
      <Intro>
        <div>
          <FriendsFairytaleList>친구들의 동화책</FriendsFairytaleList>
          <FriendsFairytaleIntro>
            친구들이 만든 동화를 함께 볼까요?
          </FriendsFairytaleIntro>
        </div>
        <CommunityBtn>
          커뮤니티 이동
          <Play fill={green} />
        </CommunityBtn>
      </Intro>
      <Background src={background} />
    </FriendsFairytaleContainer>
  );
}

const FriendsFairytaleContainer = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 12px;
  background-color: ${green};
  position: relative;
  margin-top: 58px;
  overflow: hidden;
`;

const Intro = styled.div`
  height: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const FriendsFairytaleList = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
  color: white;
  margin-bottom: 18px;
`;

const FriendsFairytaleIntro = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: white;
`;

const CommunityBtn = styled.button`
  width: 128px;
  height: 40px;
  background-color: white;
  color: ${green};
  font-weight: 600;
  font-size: 14px;
  border: 0px;
  border-radius: 300px;
  box-shadow: 0px 4px 13px 0px #0000001a;
  align-self: flex-end;
  display: flex;
  padding: 10px 16px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Background = styled.img`
  width: 100%;
  height: 240px;
  position: absolute;
  left: 0;
  top: 0;
`;

export default FriendsFairytale;
