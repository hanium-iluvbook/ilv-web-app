import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darkGray, lightBlack, lightGray } from '../constants/colors';
import { ReactComponent as Add } from '../assets/add.svg';
import Layout from '../components/Layout';
import CreateOptionalFairytale from '../components/createFairytale/CreateOptionalFairytale';
import SelectKeywordsBox from '../components/createFairytale/SelectKeywordsBox';

function CreateFairytale() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [isProVersion, setIsProVersion] = useState(false);

  const [selectedInfo, setSelectedInfo] = useState({
    traits: [],
    characters: [],
    settings: [],
    genre: [],
  });

  const handleClickCreateFairytaleBtn = (e) => {
    e.preventDefault();
    if (!isActive) return;


    if (isProVersion) {
      navigate('/loading', {
        state: {
          isProVersion,
          keywords: selectedInfo,
        },
      });
    } else {
      navigate('/settingDifficulty', {
        state: {
          keywords: selectedInfo,
        },
      });
    }
  };

  return (
    <Layout backgroundColor={'white'} color={darkGray} title={'동화 만들기'}>
      <SelectKeywordsBox
        setIsActive={setIsActive}
        selectedInfo={selectedInfo}
        setSelectedInfo={setSelectedInfo}
      />
      <CreateOptionalFairytale
        isProVersion={isProVersion}
        setIsProVersion={setIsProVersion}
      />
      <CreateFairytaleBtn
        $isActive={isActive}
        onClick={(e) => handleClickCreateFairytaleBtn(e)}
      >
        <Add stroke={isActive ? 'white' : darkGray} />
        동화 만들기
      </CreateFairytaleBtn>
    </Layout>
  );
}

const nonActiveBtnStyle = css`
  background: ${lightGray};
  color: ${darkGray};
`;

const activeBtnStyle = css`
  background: ${lightBlack};
  color: white;
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
  background-color: ${lightBlack};
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  ${(props) => (props.$isActive ? activeBtnStyle : nonActiveBtnStyle)};
  margin-bottom: 16px;
  cursor: pointer;
`;

export default CreateFairytale;
