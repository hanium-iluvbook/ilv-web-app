import styled from 'styled-components';
import { lightGray, purple } from '../../../constants/colors';

function SelectItem({ id, optionTitle, optionContent, selected, setSelected }) {
  const handleClickSelectItem = () => {
    setSelected({ id, optionTitle, optionContent });
  };

  return (
    <SelectItemContainer
      $selected={selected.optionContent === optionContent}
      onClick={handleClickSelectItem}
    >
      <Select>
        <SelectNum>{String.fromCharCode(id + 65)}</SelectNum>
        <OptionTitle>{optionTitle}</OptionTitle>
      </Select>
      <OptionContent>{optionContent}</OptionContent>
    </SelectItemContainer>
  );
}

const SelectItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 20px;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.$selected ? purple : lightGray)};
  background-color: ${(props) => (props.$selected ? '#F3F3FF' : 'white')};
  box-shadow: 0px 4px 36.1px 0px rgba(106, 106, 255, 0.17);
  cursor: pointer;
`;

const Select = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

const SelectNum = styled.div`
  background-color: ${purple};
  color: white;
  font-family: 'Jalnan';
  font-size: 12px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 300px;
  cursor: pointer;
`;

const OptionTitle = styled.div`
  color: ${purple};
  font-size: 18px;
  font-weight: 600;
  line-height: 19px;
  cursor: pointer;
`;

const OptionContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;
`;

export default SelectItem;
