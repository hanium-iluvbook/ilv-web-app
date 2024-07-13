import styled from 'styled-components';
import Keyword from './Keyword';
import {
  darkGray,
  gray,
  lightBlack,
  lightGray,
  darkMain,
} from '../../constants/colors';
import { ReactComponent as Add } from '../../assets/add.svg';
import { useEffect, useState } from 'react';

function SelectKeywordsItem({
  id,
  selectedInfo,
  category,
  setSelectedInfo,
  keywordInfo,
  setKeywordInfo,
}) {
  const [isOpenAddKeywordInput, setIsOpenAddKeywordInput] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [keywordInputValue, setKeywordInputValue] = useState('');

  const handleClickAddKeyword = () => {
    setIsOpenAddKeywordInput(true);
  };

  const handleSubmitAddKeyword = (e) => {
    e.preventDefault();
    if (!isActiveBtn) return;
    const newKeywordInfo = JSON.parse(JSON.stringify(keywordInfo));
    newKeywordInfo[id].keywords.push(keywordInputValue);
    setIsOpenAddKeywordInput(false);
    setKeywordInputValue('');
    setKeywordInfo(newKeywordInfo);
  };

  const handleChangeKeywordInput = (e) => {
    setKeywordInputValue(e.target.value);
  };

  const checkIsActiveBtn = () => {
    const validPattern = /^[a-zA-Z가-힣]+$/;
    if (
      validPattern.test(keywordInputValue) &&
      keywordInputValue.length < 15 &&
      !keywordInfo[id].keywords.find((k) => k === keywordInputValue)
    ) {
      setIsActiveBtn(true);
    } else {
      setIsActiveBtn(false);
    }
  };

  useEffect(() => {
    checkIsActiveBtn();
  }, [keywordInputValue]);

  return (
    <SelectKeywordsItemContainer>
      <Title>{keywordInfo[id].title}</Title>
      <Subject>
        {keywordInfo[id].subject} 정하기({keywordInfo[id].count}개)
      </Subject>
      <Keywords>
        {keywordInfo[id].keywords.map((text, i) => (
          <Keyword
            key={i}
            selectedInfo={selectedInfo}
            category={category}
            setSelectedInfo={setSelectedInfo}
            count={keywordInfo[id].count}
          >
            {text}
          </Keyword>
        ))}
        {!isOpenAddKeywordInput ? (
          <AddKeywordBtn
            $isOpenAddKeywordInput={isOpenAddKeywordInput}
            onClick={handleClickAddKeyword}
          >
            <Add stroke={lightBlack} />
          </AddKeywordBtn>
        ) : (
          <AddKeywordForm onSubmit={(e) => handleSubmitAddKeyword(e)}>
            <AddKeywordInput
              placeholder="15자 이내의 단어를 입력 해 주세요"
              value={keywordInputValue}
              onChange={(e) => handleChangeKeywordInput(e)}
            />
            <AddKeywordSubmitBtn type="submit" $isActiveBtn={isActiveBtn}>
              <Add stroke={isActiveBtn ? 'white' : gray} />
            </AddKeywordSubmitBtn>
          </AddKeywordForm>
        )}
      </Keywords>
    </SelectKeywordsItemContainer>
  );
}

const SelectKeywordsItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: ${lightBlack};
  padding-bottom: 4px;
`;

const Subject = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  padding-bottom: 12px;
  color: ${darkGray};
`;

const Keywords = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const AddKeywordBtn = styled.button`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid ${lightGray};
  background-color: white;
  color: ${lightBlack};
`;

const AddKeywordForm = styled.form`
  width: 100%;
  position: relative;
`;

const AddKeywordInput = styled.input`
  width: 100%;
  height: 43px;
  padding: 12px 4px 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border: 1px solid ${lightBlack};
  background-color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${lightBlack};
  font-family: 'Pretendard';
  ::placeholder {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: ${gray};
    font-family: 'Pretendard';
  }
`;

const AddKeywordSubmitBtn = styled.button`
  display: flex;
  width: 37px;
  height: 37px;
  padding: 8.5px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 300px;
  background-color: ${(props) => (props.$isActiveBtn ? darkMain : lightGray)};
  position: absolute;
  top: 3px;
  right: 4px;
`;

export default SelectKeywordsItem;
