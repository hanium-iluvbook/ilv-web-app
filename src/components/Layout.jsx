import styled from 'styled-components';
import Header from './Header';

function Layout({
  children,
  backgroundColor,
  color,
  title,
  padding,
  isFairytale,
}) {
  return (
    <LayoutContainer $backgroundColor={backgroundColor}>
      <Header
        backgroundColor={title ? backgroundColor : 'transparent'}
        color={color}
        title={title}
        isFairytale={isFairytale}
      />
      <Main $padding={padding}>{children}</Main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 600px;
  min-height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 0px 16px;
  background-color: ${(props) => props.$backgroundColor};
  position: relative;
  overflow: hidden;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => props.$padding !== 0 && '80px'};
`;

export default Layout;
