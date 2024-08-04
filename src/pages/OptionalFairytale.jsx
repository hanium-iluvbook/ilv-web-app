import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { lightBlack } from '../constants/colors';
import Intro from '../components/fairytale/Intro';
import { useLocation } from 'react-router-dom';
import Content from '../components/fairytale/optionalFairytale/Content';
import LastChapter from '../components/fairytale/LastChapter';
import Options from '../components/fairytale/optionalFairytale/Options';
import { OptionalFairytaleContext } from '../context/OptionalFairytaleContext';

function OptionalFairytale() {
  const location = useLocation();
  const { keywords } = location.state;

  const [isReading, setIsReading] = useState(false);

  const [fairytale, setFairytale] = useState(
    JSON.parse(sessionStorage.getItem('fairytale')) ?? [
      location.state?.fairytale,
      0,
      0,
      0,
    ]
  ); // 동화 API 응답을 저장(이미지, 컨텐츠, 옵션과 같은 정보)

  const [page, setPage] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(sessionStorage.getItem('selectedOptions')) ??
      new Array(3).fill(0)
  );

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

  const [translateText, setTranslateText] = useState(new Array(4).fill(0));
  const [audioContent, setAudioContent] = useState(new Array(4).fill(0));
  const [text, setText] = useState(new Array(4).fill(0));

  return (
    <OptionalFairytaleContext.Provider
      value={{
        fairytale,
        setFairytale,
        page,
        setPage,
        translateText,
        setTranslateText,
        audioContent,
        setAudioContent,
        text,
        setText,
      }}
    >
      {!isReading ? (
        <Layout
          backgroundColor="transparent"
          color="white"
          padding={0}
          isFairytale={true}
        >
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
            isFairytale={true}
          >
            <Content
              displayWidth={displayWidth}
              selectedOptions={selectedOptions}
            />
          </Layout>
        ) : (
          <Layout
            backgroundColor="white"
            color={lightBlack}
            title={fairytale[0].title}
            padding={0}
            isFairytale={true}
          >
            <Options
              options={fairytale[(page - 1) / 2].options}
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
          isFairytale={true}
        >
          <LastChapter
            page={page}
            setPage={setPage}
            level={'mid'}
            title={fairytale[0].title}
            content={fairytale.map((f) => f.content).join('')}
            fairytale={fairytale}
            audioContent={audioContent}
          />
        </Layout>
      )}
    </OptionalFairytaleContext.Provider>
  );
}

export default OptionalFairytale;
