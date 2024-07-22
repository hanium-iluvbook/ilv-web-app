import styled from 'styled-components';
import { ReactComponent as Line } from '../../../assets/line.svg';
import { purple } from '../../../constants/colors';
import SelectItem from './SelectItem';
import Tools from './Tools';
import { useState } from 'react';

function Options({
  options,
  page,
  setPage,
  fairytale,
  setFairytale,
  keywords,
  selectedOptions,
  setSelectedOptions,
  audioContent,
}) {
  const [selected, setSelected] = useState(false);

  return (
    <OptionsContainer>
      <SelectInfo>
        <Line />
        <SelectTitle>동화 내용을 선택해보자!</SelectTitle>
        <SelectBox>
          {options.map((option, id) => (
            <SelectItem
              key={id}
              id={id}
              optionTitle={option.optionTitle}
              optionContent={option.optionContent}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </SelectBox>
      </SelectInfo>
      <Tools
        page={page}
        setPage={setPage}
        selected={selected}
        fairytale={fairytale}
        setFairytale={setFairytale}
        keywords={keywords}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        audioContent={audioContent}
      />
    </OptionsContainer>
  );
}

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

const SelectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SelectTitle = styled.div`
  color: ${purple};
  font-family: 'Jalnan';
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Options;
