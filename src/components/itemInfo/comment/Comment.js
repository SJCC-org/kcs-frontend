import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

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
`;

function Comment() {
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
    </CommentBlock>
  );
}

export default Comment;
