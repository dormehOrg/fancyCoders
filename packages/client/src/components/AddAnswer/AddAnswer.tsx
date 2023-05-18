import {
  StMessageForm,
  StAnswerWrapper,
  StAnswerAll,
  StAnswer,
  StFlexButtonsWrapperStyle,
  StButtonAddAnswer,
} from './style';
import { addMessageConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import stringShorten from 'utils/stringShorten';
import { fetchForumMessagePost } from 'store/Forum/messageAction';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { AddAnswerModalUserInfo } from 'types';
import { forumErrorReset } from '../../store/Forum/forumSlice';

const MAX_ANSWER_LENGTH = 20;

interface AddAnswerType {
  topicId: number;
  feedRef: React.RefObject<HTMLDivElement>;
  handleCloseModal: () => void;
  userInfo?: AddAnswerModalUserInfo;
}

export interface MessageFormParams extends FieldValues {
  content: string;
  topic_id: number;
}

const AddAnswer = ({
  handleCloseModal,
  userInfo,
  topicId,
  feedRef,
}: AddAnswerType) => {
  const dispatch = useAppDispatch();

  const submitNewTopicMessage = (data: MessageFormParams): void => {
    if (userInfo) {
      data.id_head_answer = userInfo.id;
    }
    data.topic_id = topicId;

    dispatch(fetchForumMessagePost(data)).then(action => {
      if ('error' in action && action.error) return;
      handleCloseModal();
      const feedScroll = feedRef.current?.scrollHeight || 0;
      feedRef.current?.scroll(0, feedScroll);
    });
  };

  const forumError = useAppSelector(state => state.FORUM.error);

  const errorCancel = () => {
    if (forumError) dispatch(forumErrorReset());
  };

  const footer = (
    <StFlexButtonsWrapperStyle justifyContent="space-between">
      <StButtonAddAnswer text="Отправить" type="submit" disignType="primary" />
      <StButtonAddAnswer
        text="Отмена"
        type="reset"
        disignType="alternate"
        onClick={handleCloseModal}
      />
    </StFlexButtonsWrapperStyle>
  );

  return (
    <>
      <StAnswerWrapper onClick={errorCancel}>
        {userInfo ? (
          <StAnswer>
            {userInfo.user}: "
            {stringShorten(userInfo.message, MAX_ANSWER_LENGTH)}"
          </StAnswer>
        ) : (
          <StAnswerAll>Всем:</StAnswerAll>
        )}
      </StAnswerWrapper>

      <StMessageForm
        fields={addMessageConfig}
        handleFormSubmit={submitNewTopicMessage}
        footer={footer}
        error={forumError}
        errorReset={errorCancel}
      />
    </>
  );
};

export default AddAnswer;
