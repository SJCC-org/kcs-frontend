import React, { useState } from 'react';
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

function Comment() {
  const [isOpenComment, setIsOpenComment] = useState(false);
  return (
    <CommentBlock>
      <div className="whoComment">
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>정재욱</span>
        <span style={{ marginLeft: '0.5rem', fontSize: '14px' }}>
          2022/07/09 11:11
        </span>
      </div>
      <div className="commentContent">
        댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글
        예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
        입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시
        입니다.댓글 예시 입니다.댓글 예시 입니다.댓글 예시 입니다.
      </div>
      <div className="addComment">
        {isOpenComment ? (
          <span onClick={() => setIsOpenComment(!isOpenComment)}>숨기기</span>
        ) : (
          <span onClick={() => setIsOpenComment(!isOpenComment)}>
            답글 달기
          </span>
        )}
      </div>
      {isOpenComment && <CommentAdd />}
    </CommentBlock>
  );
}

export default Comment;
