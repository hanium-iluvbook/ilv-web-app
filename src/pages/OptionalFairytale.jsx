import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { lightBlack } from '../constants/colors';
import Intro from '../components/fairytale/Intro';
import { useLocation } from 'react-router-dom';
import Content from '../components/fairytale/optionalFairytale/Content';
import LastChapter from '../components/fairytale/LastChapter';
import Options from '../components/fairytale/optionalFairytale/Options';

function OptionalFairytale() {
  const location = useLocation();
  const { keywords } = location.state;

  const [isReading, setIsReading] = useState(false);

  const [fairytale, setFairytale] = useState([
    location.state?.fairytale,
    0,
    0,
    0,
  ]); // 동화 API 응답을 저장(이미지, 컨텐츠, 옵션과 같은 정보)

  const [page, setPage] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState(new Array(3).fill(0));

  const [displayWidth, setDisplayWidth] = useState(
    window.innerWidth >= 600 ? 600 : window.innerWidth
  );

  useEffect(() => {
    const updateDisplayWidth = () => {
      setDisplayWidth(window.innerWidth >= 600 ? 600 : window.innerWidth);
    };
    window.addEventListener('resize', updateDisplayWidth);

    return () => {
      window.removeEventListener('resize', updateDisplayWidth);
    };
  }, []);

  return !isReading ? (
    <Layout backgroundColor="transparent" color="white" padding={0}>
      {fairytale[page / 2] && keywords && (
        <Intro
          displayWidth={displayWidth}
          title={fairytale[0].title}
          summary={fairytale[page / 2].summary}
          keywords={keywords}
          cover={fairytale[0].imgURL}
          setIsReading={setIsReading}
        />
      )}
    </Layout>
  ) : page < 7 ? (
    page % 2 === 0 ? (
      <Layout
        backgroundColor="transparent"
        color="white"
        title={fairytale[0].title}
        padding={0}
      >
        <Content
          displayWidth={displayWidth}
          page={page}
          setPage={setPage}
          fairytale={fairytale}
          content={fairytale[page / 2].content}
          imgUrl={fairytale[page / 2].imgURL}
          selectedOptions={selectedOptions}
        />
      </Layout>
    ) : (
      <Layout
        backgroundColor="white"
        color={lightBlack}
        title={fairytale[0].title}
        padding={0}
      >
        <Options
          options={fairytale[(page - 1) / 2].options}
          page={page}
          setPage={setPage}
          fairytale={fairytale}
          setFairytale={setFairytale}
          keywords={keywords}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </Layout>
    )
  ) : (
    <Layout
      backgroundColor="white"
      color={lightBlack}
      title={fairytale[0].title}
      padding={0}
    >
      <LastChapter
        page={page}
        setPage={setPage}
        level={'mid'}
        title={fairytale[0].title}
        content={fairytale.map((f) => f.content).join('')}
        fairytale={fairytale}
      />
    </Layout>
  );
}

export default OptionalFairytale;
