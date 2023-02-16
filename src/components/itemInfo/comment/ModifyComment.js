import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import palette from "../../../styles/palette";

function ModifyComment({
  modifyReplies,
  onChange,
  onModifyReplies,
  commentIdx,
  onIsModify,
}) {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <ModifyCommentBlock>
      <ModifyModal>
        <div className="modifyHeader">
          <div className="closeBlock">
            <AiOutlineClose onClick={onIsModify} />
          </div>
          <h2>댓글 수정</h2>
        </div>
        <ModifyWrapper>
          <StyledTextArea
            name="modifyReplies"
            value={modifyReplies}
            onChange={onChange}
          />
          <button onClick={() => onModifyReplies(commentIdx)}>수정하기</button>
        </ModifyWrapper>
      </ModifyModal>
    </ModifyCommentBlock>
  );
}

export default ModifyComment;

const ModifyCommentBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const ModifyModal = styled.div`
  width: 500px;
  height: 350px;
  background-color: white;
  border-radius: 7px;

  .modifyHeader {
    width: 100%;
    h2 {
      text-align: center;
    }

    .closeBlock {
      width: 100%;
      text-align: right;
      padding: 1rem 1rem 0 0;

      svg {
        cursor: pointer;
        font-size: 20px;
      }
    }
  }
`;

const ModifyWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem 0;
    font-weight: bold;
    color: ${palette.brown[0]};
    border: none;
    border-radius: 7px;
    font-size: 18px;
    cursor: pointer;
    background-color: ${palette.yellow[0]};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
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
