import styled from 'styled-components';
import { MAIN_TEXT_COLOR } from 'styles/variables/colors';

export const StEndGame = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StEndGameWrapper = styled.div`
  background-color: #d6a13b;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  min-width: 400px;
`;

export const StEndGameTitle = styled.h3`
  color: ${MAIN_TEXT_COLOR};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
`;

export const StEndGameButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;
