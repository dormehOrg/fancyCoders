import { StBoard, StTitle } from 'pages/LeaderBoardPage/style';
import Button from 'components/Button/Button';
import TopicMessage from './TopicMessage';
import { testTopicData } from 'data/testTopicData';
import { testTopicDiscussionData } from 'data/testTopicDiscussionData';
import { css } from 'styled-components';
import {
  StTopic,
  StUser,
  StUserInfo,
  StUserAvatar,
  StUserName,
  StUserRank,
  StTopicWrapper,
  StTopicNameContainer,
  StTopicName,
  stBoardStyle,
  StTopicText,
  StTopicDate,
  StTopicDiscussion,
} from './style';
import useModal from 'hooks/useModal';
import { useTitle } from 'utils/useTitle';

const marginBottom58px = css`
  margin: 0 0 58px;
`;

const ForumTopic = () => {
  // TODO: заменить тестовые данные на данные с сервера
  useTitle(testTopicData.topicName);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <StBoard css={stBoardStyle}>
      <StTitle css={marginBottom58px}>Форум</StTitle>

      <StTopic>
        <StUser>
          <StUserAvatar image={testTopicData.avatar} />
          <StUserInfo>
            <StUserName>{testTopicData.author}</StUserName>
            <StUserRank>{testTopicData.rank}</StUserRank>
          </StUserInfo>
        </StUser>
        <StTopicWrapper>
          <StTopicNameContainer>
            <StTopicName>{testTopicData.topicName}</StTopicName>
          </StTopicNameContainer>
          <StTopicText>
            {testTopicData.messages}
            <StTopicDate>тема создана: {testTopicData.date}</StTopicDate>
          </StTopicText>
        </StTopicWrapper>
      </StTopic>

      <StTopicDiscussion>
        {testTopicDiscussionData.map(message => (
          <TopicMessage
            key={message.id}
            {...message}
            onClick={handleOpenModal}
          />
        ))}
      </StTopicDiscussion>

      <Button text="Написать сообщение" onClick={handleOpenModal} />
    </StBoard>
  );
};

export default ForumTopic;
