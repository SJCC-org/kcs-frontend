import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const CommentAddBlock = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.016);

  .wholeComment {
    border-bottom: 1px solid ${palette.gray[0]};
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
function CommentAdd() {
  return (
    <CommentAddBlock>
      <div className="wholeComment">
        <div className="whoComment">
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>정재욱</span>
          <span style={{ marginLeft: '0.5rem', fontSize: '14px' }}>
            2022/07/09 11:11
          </span>
        </div>
        <div className="commentContent">
          댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.
        </div>
        <div className="addComment">
          <span>답글 달기</span>
        </div>
      </div>
      <div className="wholeComment">
        <div className="whoComment">
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>정재욱</span>
          <span style={{ marginLeft: '0.5rem', fontSize: '14px' }}>
            2022/07/09 11:11
          </span>
        </div>
        <div className="commentContent">
          댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
          입니다.
        </div>
        <div className="addComment">
          <span>답글 달기</span>
        </div>
      </div>
      <AddComment>
        <StyledTextArea placeholder="댓글을 작성하세요" />
        <div className="commentExtraButton">
          <button>댓글 작성</button>
        </div>
      </AddComment>
    </CommentAddBlock>
  );
}

export default CommentAdd;
