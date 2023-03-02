import React, { CSSProperties, FC } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';

const mainScreenStyle: CSSProperties = {
  backgroundImage: 'url(src/assets/img/background.png)',
  backgroundSize: 'cover',
  height: '100vh',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

const gameScreenStyle: CSSProperties = {};

const StContent = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  padding: 20px;
  flex: 1;
`;

type LayoutProps = { isGameScreen?: boolean };

const Layout: FC<LayoutProps> = ({ children, isGameScreen }) => {
  return (
    <div style={isGameScreen ? gameScreenStyle : mainScreenStyle}>
      <Header />
      <StContent>{children}</StContent>
    </div>
  );
};

export default Layout;
