import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

function CommentAdd({ userRes, onDeleteReplies, re, onIsModify }) {
  return (
    <CommentAddBlock>
      <div className="wholeComment">
        <div className="whoComment">
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            {re.name}
          </span>
          <span style={{ marginLeft: "0.5rem", fontSize: "14px" }}>
            {re.createdDate}
          </span>
        </div>
        <div className="commentContent">{re.content}</div>
        {userRes.id === re.memberId && (
          <div className="commentModify">
            <button onClick={() => onIsModify(re.id)}>수정</button>
            <button onClick={() => onDeleteReplies(re.id)}>삭제</button>
          </div>
        )}
      </div>
    </CommentAddBlock>
  );
}

export default CommentAdd;

const CommentAddBlock = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.016);

  .wholeComment {
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
    .commentModify {
      width: 100%;
      text-align: right;

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
`;
