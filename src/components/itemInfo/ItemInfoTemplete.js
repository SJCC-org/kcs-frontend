import React, { useState } from 'react';
import styled from 'styled-components';
import CommentContainer from '../../containers/comment/CommentContainer';
import ModifyStudyContainer from '../../containers/itemInfo/ModifyStudyContainer';
import palette from '../../lib/styles/palette';

const ItemInfoTempleteBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .commentButton {
    width: 800px;
    margin-bottom: 1rem;
    text-align: right;

    button {
      padding: 0.7rem 1rem;
      background-color: ${palette.yellow[0]};
      color: ${palette.black[0]};
      font-weight: bold;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;
      cursor: pointer;
      color: ${palette.brown[0]};
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

const ItemInfoWrapper = styled.div`
  width: 800px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  margin-top: 2rem;
  border-radius: 7px;
  margin-bottom: 2rem;
  padding: 1rem;

  @media (max-width: 800px) {
    width: 100%;
  }

  .infoHeader {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .studyStatus {
      padding: 0.5rem 0.7rem;
      background-color: ${palette.yellow[0]};
      color: ${palette.black[0]};
      font-weight: bold;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;
      cursor: pointer;
      color: ${palette.brown[0]};
    }
  }

  .infoTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    h2 {
      margin: 0;
    }

    .studyModify {
      button {
        margin-left: 0.5rem;
        border: 1px solid ${palette.yellow[0]};
        background-color: white;
        border-radius: 7px;
        padding: 0.3rem 0.5rem;
        color: ${palette.brown[0]};
        cursor: pointer;
      }
    }
  }

  .subInfo {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    padding: 1rem 0;
    border-bottom: 1px solid ${palette.gray[0]};
    border-top: 1px solid ${palette.gray[0]};

    .subTitleData {
      font-size: 14px;
      color: ${palette.gray[2]};
      margin-bottom: 0.5rem;

      #real {
        color: #333;
        font-weight: bold;
      }
    }
  }

  .infoDescription {
    padding: 1rem 0;
  }

  .infoParticipant {
    border-top: 1px solid ${palette.gray[0]};
    padding: 1rem 0;
    width: 100%;
    text-align: right;

    button {
      margin-left: 1rem;
      padding: 0.7rem 1rem;
      background-color: ${palette.yellow[0]};
      color: ${palette.black[0]};
      font-weight: bold;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;
      cursor: pointer;
      color: ${palette.brown[0]};
    }
  }

  .infoParticipantData {
    width: 100%;
    text-align: center;
    border-top: 1px solid ${palette.gray[0]};
    padding: 1rem 0;
    color: ${palette.brown[0]};
    font-weight: bold;
  }
`;

const AddComment = styled.div`
  width: 800px;
  margin-bottom: 0.5rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  outline: none;
  border-radius: 7px;
  border: 1px solid ${palette.gray[1]};
  padding: 1rem;
  font-size: 18px;

  &:placeholder-shown {
    font-size: 18px;
  }
  &:focus {
    border: 1px solid ${palette.yellow[0]};
  }
`;

const CommentBlock = styled.div`
  width: 800px;
  margin-bottom: 2rem;
  border-radius: 7px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);

  @media (max-width: 800px) {
    width: 100%;
  }
`;
function ItemInfoTemplete({
  userRes,
  studyRes,
  commentRes,
  onAddComment,
  comment,
  onChange,
}) {
  const [isOpenParticipant, setIsOpenParticipant] = useState(false);
  const [isOpenModify, setIsOpenModify] = useState(false);
  const onOpenParticipant = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디에 참여하시겠습니까?') === true) {
    } else {
      return;
    }
  };

  const onOpenModify = () => {
    setIsOpenModify(!isOpenModify);
  };

  return (
    studyRes && (
      <ItemInfoTempleteBlock>
        <ItemInfoWrapper>
          <div className="infoHeader">
            {studyRes.recruitCompleted ? (
              <div className="studyStatus">모집완료</div>
            ) : (
              <div className="studyStatus">모집중</div>
            )}
          </div>
          <div className="infoTitle">
            <h2>{studyRes.title}</h2>
            {userRes.username === studyRes.organizerUsername && (
              <div className="studyModify">
                <button onClick={onOpenModify}>수정</button>
                <button>삭제</button>
              </div>
            )}
          </div>
          <div className="subInfo">
            <div className="subTitleData">
              <span>
                작성자 : <span id="real">{studyRes.organizerName}</span>
              </span>
            </div>
            <div className="subTitleData">
              <span>
                카테고리 : <span id="real"> {studyRes.studyCategory}</span>
              </span>
            </div>
            <div className="subTitleData">
              <span>
                일정 : <span id="real">{studyRes.schedule}</span>
              </span>
            </div>
            <div className="subTitleData">
              <span>
                진행방식 : <span id="real"> {studyRes.howTo}</span>
              </span>
            </div>
            <div className="subTitleData">
              <span>
                인원 : <span id="real"> {studyRes.maxNum}</span>
              </span>
            </div>
          </div>
          <div className="infoDescription">{studyRes.description}</div>
          <div className="infoParticipant">
            <button onClick={() => setIsOpenParticipant(!isOpenParticipant)}>
              참여자 보기
            </button>
            {studyRes.organizerUsername !== userRes.username && (
              <button onClick={onOpenParticipant}>참여하기 </button>
            )}
          </div>
          {isOpenParticipant && (
            <div className="infoParticipantData">
              {studyRes.participantNames.length === 0 ? (
                <span>참여자 없음</span>
              ) : (
                studyRes.participantNames.map((name) => <span>{name}</span>)
              )}
            </div>
          )}
        </ItemInfoWrapper>
        {isOpenModify && <ModifyStudyContainer onOpenModify={onOpenModify} />}
        <AddComment>
          <StyledTextArea
            placeholder="댓글을 작성하세요"
            name="comment"
            value={comment}
            onChange={onChange}
          />
        </AddComment>
        <div className="commentButton">
          <button onClick={onAddComment}>댓글 작성</button>
        </div>
        <CommentBlock>
          {commentRes &&
            commentRes.map((comment) => (
              <CommentContainer
                key={comment.id}
                comment={comment}
                commentId={comment.id}
              />
            ))}
        </CommentBlock>
      </ItemInfoTempleteBlock>
    )
  );
}

export default ItemInfoTemplete;
