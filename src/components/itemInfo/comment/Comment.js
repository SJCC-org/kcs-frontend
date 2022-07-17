import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import CommentAdd from './CommentAdd';

const CommentBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.yellow[0]};
  padding: 1rem;

  .whoComment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .addComment {
    margin-top: 1rem;
    text-align: right;
    cursor: pointer;
    span {
      font-size: 18px;
      font-weight: bold;
      color: ${palette.brown[0]};
    }
  }
`;

const AddComment = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  .commentExtraButton {
    width: 100%;
    margin: 1rem 0;
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
function Comment({ comment, replies, onChange, onAddReplies }) {
  return (
    <CommentBlock>
      <div className="whoComment">
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
          {comment.name}
        </span>
        <span style={{ marginLeft: '0.5rem', fontSize: '14px' }}>
          {comment.createdDate}
        </span>
      </div>
      <div className="commentContent">{comment.content}</div>
      {comment.replies.map((re) => (
        <CommentAdd key={re.id} re={re} />
      ))}
      <AddComment>
        <StyledTextArea
          placeholder="댓글을 작성하세요"
          name="replies"
          value={replies}
          onChange={onChange}
        />
        <div className="commentExtraButton">
          <button onClick={onAddReplies}>댓글 작성</button>
        </div>
      </AddComment>
    </CommentBlock>
  );
}

export default Comment;
