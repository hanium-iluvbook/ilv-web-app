import styled from 'styled-components';
import { lightBlack, lightGray } from '../../constants/colors';
import { useEffect, useState } from 'react';

function Keyword({ children, selectedInfo, category, setSelectedInfo, count }) {
  const [selected, setSelected] = useState(
    selectedInfo[category].includes(children)
  );

  useEffect(() => {
    setSelected(selectedInfo[category].includes(children));
  }, [selectedInfo, category, children]);

  const handleKeywordClcik = () => {
    const newSelectedInfo = JSON.parse(JSON.stringify(selectedInfo));
    if (selected) {
      const index = newSelectedInfo[category].indexOf(children);
      newSelectedInfo[category].splice(index, 1);
    } else {
      if (newSelectedInfo[category].length === count) {
        newSelectedInfo[category].shift();
      }
      newSelectedInfo[category].push(children);
    }
    setSelectedInfo(newSelectedInfo);
  };

  return (
    <KeywordContainer onClick={handleKeywordClcik} selected={selected}>
      {children}
      {selected && (
        <SelectCount>
          {selectedInfo[category].indexOf(children) + 1}
        </SelectCount>
      )}
    </KeywordContainer>
  );
}

const KeywordContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid ${lightGray};
  background-color: ${(props) => (props.selected ? lightBlack : 'white')};
  color: ${(props) => (props.selected ? 'white' : lightBlack)};
  position: relative;
`;

const SelectCount = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -2px;
  top: -4px;
  border-radius: 300px;
  border: 1.5px solid ${lightBlack};
  background: #fff;
  color: ${lightBlack};
  font-size: 12px;
  font-weight: 700;
  line-height: 11px;
`;

export default Keyword;
