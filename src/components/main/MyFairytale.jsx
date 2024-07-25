import { useState } from 'react';
import styled from 'styled-components';
import CreateFairytale from './CreateFairytale';
import fairytales from '../../dummy/fairytaleList';
import Fairytale from './Fairytale';

function MyFairytale() {
  const [fairytaleList, setFairytaleList] = useState(fairytales);

  return (
    <MyFairytaleContainer>
      <MyOwnFairytale>나만의 동화책</MyOwnFairytale>
      <CreateFairytale />
      {fairytaleList.map((fairytale, id) => {
        return (
          <Fairytale
            key={id}
            fairytaleInfo = {fairytale}
            id={id}
          />
        )})}
    </MyFairytaleContainer>
  );
}

const MyFairytaleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 100px;
  margin-bottom: 16px;
  @media screen and (max-width: 600px) {
        width: 90vw;
    }
`;

const MyOwnFairytale = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export default MyFairytale;
