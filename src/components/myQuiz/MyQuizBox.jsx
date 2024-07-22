import styled from "styled-components";
import { blue, green, main, pink, purple } from "../../constants/colors";
import { useState } from "react";
import { quizList } from "../../dummy/quizList";
import MyQuizItem from "./MyQuizItem";

function MyQuizBox() {
  const [quiz, setQuiz] = useState(quizList);
  const colors = [main, green, purple, pink, blue];

  return (
    <VocabularyItemBoxContainer>
      <LearningQuiz>학습중인 퀴즈들</LearningQuiz>
      {quiz.map((v, id) => (
        <MyQuizItem
          key={id}
          level={v.level}
          title={v.title}
          finishCount={v.finishCount}
          totalCount={v.totalCount}
          color={colors[id % 5]}
        />
      ))}
    </VocabularyItemBoxContainer>
  );
}

const LearningQuiz = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  padding: 24px 0px 2px 16px;
`;

const VocabularyItemBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default MyQuizBox;
