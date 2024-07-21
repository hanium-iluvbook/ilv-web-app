import styled from 'styled-components';
import { whiteGray, gray, lightBlack, darkGray } from '../../constants/colors';
import { ReactComponent as Add } from '../../assets/add.svg';
import { Link } from 'react-router-dom';

function CreateFairytale() {
  return (
    <CreateFairytaleContainer>
      <Intro>
        <div>
          <CreateFairytaleTitle>나만의 동화 만들기</CreateFairytaleTitle>
          <CreateFairytaleIntro>
            간단한 영어 단어로 동화를 만들어요
          </CreateFairytaleIntro>
        </div>
        <Link to="/createFairytale">
          <CreateFairytaleBtn>
            <Add stroke="white" />
            Make
          </CreateFairytaleBtn>
        </Link>
      </Intro>
    </CreateFairytaleContainer>
  );
}

const CreateFairytaleContainer = styled.div`
  width: 100%;
  height: 220px;
  background-color: ${whiteGray};
  border-radius: 12px;
  border: 2px dashed ${gray};
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

const CreateFairytaleTitle = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  margin-bottom: 18px;
  color: ${lightBlack};
`;

const CreateFairytaleIntro = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: ${darkGray};
`;

const CreateFairytaleBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${lightBlack};
  color: white;
  font-weight: 500;
  font-size: 14px;
  border: none;
  border-radius: 300px;
  box-shadow: 0px 4px 13px 0px #0000001a;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export default CreateFairytale;
