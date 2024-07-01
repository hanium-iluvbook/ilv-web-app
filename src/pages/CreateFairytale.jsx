import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  whiteGray,
  darkGray,
  lightBlack,
  darkMain,
  lightGray,
  gray,
} from '../constants/colors';
import { ReactComponent as Close } from '../assets/close.svg';
import { ReactComponent as Crown } from '../assets/crown.svg';
import { ReactComponent as Book } from '../assets/book.svg';
import { ReactComponent as Add } from '../assets/add.svg';
import Layout from '../components/Layout';

function CreateFairytale() {
  const location = useLocation();
  const difficulty = location.state?.difficulty;

  const [isActiveWordBtn, setIsActiveWordBtn] = useState(false);
  const [wordInputValue, setWordInputValue] = useState('');
  const [wordsList, setWordsList] = useState([]);
  const [isProVersion, setIsProVersion] = useState(false);

  useEffect(() => {
    checkIsActiveBtn();
  }, [wordInputValue, wordsList]);

  const checkIsActiveBtn = () => {
    const validPattern = /^[a-zA-Z가-힣]+$/;
    if (
      validPattern.test(wordInputValue) &&
      wordsList.length < 5 &&
      !wordsList.find((wordListItem) => wordListItem === wordInputValue)
    ) {
      setIsActiveWordBtn(true);
    } else {
      setIsActiveWordBtn(false);
    }
  };

  const handleChangeWordInput = (e) => {
    setWordInputValue(e.target.value);
  };

  const handleSubmitWordForm = (e) => {
    e.preventDefault();
    if (!isActiveWordBtn) return;

    const newWordsList = [...wordsList];
    newWordsList.push(wordInputValue);
    setWordsList(newWordsList);
    setWordInputValue('');
    setIsActiveWordBtn(false);
  };

  const handleDeleteWord = (id) => {
    const newWordsList = [...wordsList];
    newWordsList.splice(id, 1);
    setWordsList(newWordsList);
  };

  const handleClickToggle = () => {
    setIsProVersion((prev) => !prev);
  };

  return (
    <Layout backgroundColor={whiteGray} color={darkGray}>
      <WordField>
        <WordFieldInfo>
          <WordFieldInfoTitle>단어로 동화 만들기</WordFieldInfoTitle>
          <WordFieldInfoDes>최대 5단어까지 추가 가능해요</WordFieldInfoDes>
        </WordFieldInfo>
        <WordForm onSubmit={handleSubmitWordForm}>
          <WordInput
            type="text"
            placeholder="15자 이내의 단어를 입력해 주세요"
            value={wordInputValue}
            onChange={handleChangeWordInput}
            maxLength="15"
          ></WordInput>
          <WordBtn type="submit" $isActive={isActiveWordBtn}>
            추가
          </WordBtn>
        </WordForm>
      </WordField>
      <WordListBox>
        {wordsList?.map((word, id) => (
          <WordListItem key={id}>
            {word} <Close onClick={() => handleDeleteWord(id)} />
          </WordListItem>
        ))}
      </WordListBox>
      <OptionalFairytale>
        <OptionalFairytaleTitle>
          <Crown width={28} height={28} />
          <OptionalFairytaleInfo>선택형 동화 만들기</OptionalFairytaleInfo>
        </OptionalFairytaleTitle>
        <OptionalFairytaleToggle
          isProVersion={isProVersion}
          onClick={handleClickToggle}
        >
          <Toggle isProVersion={isProVersion}>
            {isProVersion && <Crown width={14} height={14} />}
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
      <Link to="/loading" style={{width: '100%'}}>
        <CreateFairytaleBtn $isActive={wordsList.length > 0}>
          <Add stroke={wordsList.length > 0 ? 'white' : darkGray} />
          동화 만들기
        </CreateFairytaleBtn>
      </Link>
    </Layout>
  );
}

const WordField = styled.div`
  width: 100%;
  min-height: calc(100vh -80px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;
`;

const WordFieldInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WordFieldInfoTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  color: ${lightBlack};
`;

const WordFieldInfoDes = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  color: ${darkGray};
`;

const WordForm = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
`;

const WordInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: white;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`;

const nonActiveBtnStyle = css`
  background: ${lightGray};
  color: ${darkGray};
`;

const activeBtnStyle = css`
  background: ${darkMain};
  color: white;
`;

const WordBtn = styled.button`
  display: flex;
  height: 34px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 16.198px;
  ${(props) => (props.$isActive ? activeBtnStyle : nonActiveBtnStyle)};
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const WordListBox = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

const WordListItem = styled.div`
  display: flex;
  padding: 8px 12px 8px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 300px;
  border: none;
  background-color: rgba(176, 176, 176, 0.16);
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
  ${(props) => (props.isProVersion ? proToggleStyle : basicToggleStyle)};
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
    props.isProVersion ? 'translateX(38px)' : 'translateX(0)'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const BookItem = styled.div`
  position: absolute;
  top: 72px;
  left: 100px;
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

const CreateFairytaleBtn = styled.button`
  display: flex;
  width: 100%;
  height: 58px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 100px;
  background-color: ${darkMain};
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  ${(props) => (props.$isActive ? activeBtnStyle : nonActiveBtnStyle)};
  cursor: pointer;
`;

export default CreateFairytale;
