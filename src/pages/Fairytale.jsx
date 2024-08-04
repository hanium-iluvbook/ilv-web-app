import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { lightBlack } from '../constants/colors';
import Intro from '../components/fairytale/Intro';
import { useLocation } from 'react-router-dom';
import Content from '../components/fairytale/Content';
import LastChapter from '../components/fairytale/LastChapter';
import { FairytaleContext } from '../context/FairytaleContext';

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

  const [translateText, setTranslateText] = useState(new Array(3).fill(0));
  const [audioContent, setAudioContent] = useState(new Array(3).fill(0));
  const [text, setText] = useState([
    fairytale.pages[0].content.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    ),
    0,
    0,
  ]);

  return (
    <FairytaleContext.Provider
      value={{
        fairytale,
        keywords,
        page,
        setPage,
        translateText,
        setTranslateText,
        audioContent,
        setAudioContent,
        text,
        setText
      }}
    >
      {!isReading ? (
        <Layout
          backgroundColor="transparent"
          color="white"
          padding={0}
          isFairytale={true}
        >
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
          isFairytale={true}
        >
          <Content displayWidth={displayWidth} />
        </Layout>
      ) : (
        <Layout
          backgroundColor="white"
          color={lightBlack}
          title={fairytale.title}
          padding={0}
          isFairytale={true}
        >
          <LastChapter
            level={difficulty}
            fairytale={fairytale}
            page={page}
            setPage={setPage}
            title={fairytale.title}
            content={fairytale.pages.flatMap((v) => v.content).join('')}
            audioContent={audioContent}
          />
        </Layout>
      )}
    </FairytaleContext.Provider>
  );
}

export default Fairytale;
