import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { lightBlack } from '../constants/colors';
import Intro from '../components/fairytale/Intro';
import { useLocation } from 'react-router-dom';
import Content from '../components/fairytale/Content';
import LastChapter from '../components/fairytale/LastChapter';

function Fairytale() {
  const location = useLocation();
  const { fairytale, keywords, difficulty } = location.state;

  const [isReading, setIsReading] = useState(false);
  const [page, setPage] = useState(0);
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
    <Layout backgroundColor="transparent" color='white' padding={0}>
      {fairytale && keywords && (
        <Intro
          displayWidth={displayWidth}
          title={fairytale.title}
          summary={fairytale.summary}
          keywords={keywords}
          cover={fairytale.pages[0].imgURL}
          setIsReading={setIsReading}
        />
      )}
    </Layout>
  ) : page < 3 ? (
    <Layout
      backgroundColor="transparent"
      color="white"
      title={fairytale.title}
      padding={0}
    >
      <Content
        displayWidth={displayWidth}
        page={page}
        setPage={setPage}
        contents={fairytale.pages}
      />
    </Layout>
  ) : (
    <Layout
      backgroundColor="white"
      color={lightBlack}
      title={fairytale.title}
      padding={0}
    >
      <LastChapter
        page={page}
        setPage={setPage}
        level={difficulty}
        title={fairytale.title}
        content={fairytale.pages.flatMap((v) => v.content).join('')}
      />
    </Layout>
  );
}

export default Fairytale;
