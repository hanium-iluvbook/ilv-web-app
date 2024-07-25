import styled, { css } from 'styled-components';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { ReactComponent as Book } from '../../assets/book.svg';
import { gray, lightGray } from '../../constants/colors';

function CreateOptionalFairytale({ isProVersion, setIsProVersion }) {
  const handleClickToggle = () => {
    setIsProVersion((prev) => !prev);
  };
  return (
    <CreateOptionalFairytaleContainer>
      <OptionalFairytale>
        <OptionalFairytaleTitle>
          <Crown width={28} height={28} />
          <OptionalFairytaleInfo>선택형 동화 만들기</OptionalFairytaleInfo>
        </OptionalFairytaleTitle>
        <OptionalFairytaleToggle
          $isProVersion={isProVersion}
          onClick={handleClickToggle}
        >
          <Toggle $isProVersion={isProVersion}>
            {isProVersion && (
              <Crown width={14} height={14} className="svg-icon" />
            )}
          </Toggle>
          {isProVersion ? 'PRO' : 'OFF'}
        </OptionalFairytaleToggle>
      </OptionalFairytale>
      <BookContainer>
        <Book width={600} height={380} />
        <BookItem>
          <Premium>Premium</Premium>
          <BookItemTitle>
            아이러브북을
            <br /> 100% 즐겨보자!
          </BookItemTitle>
          <BookItemInfo>
            아이가 직접 선택하여 만들어가는 동화와
            <br />
            제한 없이 마음껏 단어장과 퀴즈를 생성하며
            <br />
            재미와 학습 두 마리 토끼를 잡아볼까요?
          </BookItemInfo>
        </BookItem>
      </BookContainer>
    </CreateOptionalFairytaleContainer>
  );
}

const CreateOptionalFairytaleContainer = styled.div`
  width: 100%;
  padding-top: 28px;
`;

const OptionalFairytale = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const OptionalFairytaleTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const OptionalFairytaleInfo = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;

const proToggleStyle = css`
  background: linear-gradient(
    97deg,
    #92cbf6 -11.36%,
    #ff67e7 -6.1%,
    #c567ff 105.64%
  );
  color: white;
  justify-content: flex-start;
`;

const basicToggleStyle = css`
  background: ${lightGray};
  color: ${gray};
  justify-content: flex-end;
`;

const OptionalFairytaleToggle = styled.div`
  display: flex;
  width: 70px;
  height: 32px;
  align-items: center;
  border-radius: 300px;
  padding: 2px 10px;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  transition: background 0.3s linear, color 0.3s linear;
  ${(props) => (props.$isProVersion ? proToggleStyle : basicToggleStyle)};
  cursor: pointer;
`;

const Toggle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 300px;
  background: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.$isProVersion ? 'translateX(38px)' : 'translateX(0)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BookContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const BookItem = styled.div`
  position: absolute;
  top: calc(110px - 3vw);
  left: 0;
  padding: 0 11vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Premium = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background: linear-gradient(
    97deg,
    #92cbf6 -11.36%,
    #ff67e7 -6.1%,
    #c567ff 105.64%
  );
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
`;

const BookItemTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  background: linear-gradient(
    97deg,
    #92cbf6 -11.36%,
    #ff67e7 -6.1%,
    #c567ff 105.64%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
`;

const BookItemInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  background: linear-gradient(
    97deg,
    #92cbf6 -11.36%,
    #ff67e7 -6.1%,
    #c567ff 105.64%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default CreateOptionalFairytale;
